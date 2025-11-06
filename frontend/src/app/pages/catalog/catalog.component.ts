import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { ProductService, Product, Category } from '../../services/product.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  searchQuery = '';
  Math = Math; // Hacer Math disponible en el template
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  selectedCategory = '';
  selectedFilter = '';
  loading = true;
  error = false;
  errorMessage = '';
  private searchSubject = new Subject<string>();

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Configurar búsqueda en tiempo real con debounce
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(query => {
      this.searchQuery = query;
      this.applyFilters();
    });
  }

  ngOnInit(): void {
    this.checkCategoryFilter();
    this.loadProducts();
    this.loadCategories();
  }

  checkCategoryFilter(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const filter = params['filter'];
      const search = params['search'];
      
      if (category) {
        this.selectedCategory = category;
        this.selectedFilter = '';
      } else if (filter) {
        this.selectedFilter = filter;
        this.selectedCategory = '';
      }
      
      if (search) {
        this.searchQuery = search;
      }
      
      // Aplicar filtros después de que los productos se carguen
      if (this.products.length > 0) {
        this.applyFilters();
      }
    });
  }

  loadProducts(): void {
    this.loading = true;
    this.error = false;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        // Verificar si hay parámetros en la URL
        this.route.queryParams.subscribe(params => {
          const category = params['category'];
          const filter = params['filter'];
          const search = params['search'];
          
          if (category) {
            this.selectedCategory = category;
            this.selectedFilter = '';
          } else if (filter) {
            this.selectedFilter = filter;
            this.selectedCategory = '';
          }
          
          if (search) {
            this.searchQuery = search;
          }
          
          this.applyFilters();
        });
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando productos:', error);
        this.error = true;
        this.errorMessage = 'No se pudieron cargar los productos. Por favor, verifica que el servidor esté ejecutándose.';
        this.loading = false;
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error cargando categorías:', error);
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.products];

    // Filtrar por categoría
    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    // Filtrar por tipo (ofertas, nuevas, tendencia)
    if (this.selectedFilter) {
      switch (this.selectedFilter) {
        case 'ofertas':
          filtered = filtered.filter(p => p.isOnSale === true);
          break;
        case 'nuevas':
          filtered = filtered.filter(p => p.isNew === true);
          break;
        case 'tendencia':
          filtered = filtered.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    // Filtrar por búsqueda
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    this.filteredProducts = filtered;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.selectedFilter = '';
    this.applyFilters();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: category || null, filter: null },
      queryParamsHandling: 'merge'
    });
  }

  clearCategoryFilter(): void {
    this.selectedCategory = '';
    this.selectedFilter = '';
    this.applyFilters();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: null, filter: null },
      queryParamsHandling: 'merge'
    });
  }

  retryLoad(): void {
    this.loadProducts();
  }

  onSearch(): void {
    this.searchSubject.next(this.searchQuery);
  }

  onSearchInput(): void {
    this.searchSubject.next(this.searchQuery);
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`¡${product.name} agregado al carrito!`);
  }

  onAddToWishlist(product: Product): void {
    this.cartService.toggleWishlist(product.id);
    const isInWishlist = this.cartService.isInWishlist(product.id);
    if (isInWishlist) {
      alert(`¡${product.name} agregado a tu lista de deseos!`);
    } else {
      alert(`¡${product.name} removido de tu lista de deseos!`);
    }
  }
}
