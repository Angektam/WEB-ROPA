import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ProductService, Product, Category } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsletterEmail = '';
  Math = Math; // Hacer Math disponible en el template
  featuredProducts: Product[] = [];
  onSaleProducts: Product[] = [];
  newProducts: Product[] = [];
  trendingProducts: Product[] = [];
  categories: Category[] = [];
  loading = true;
  loadingOfertas = true;
  loadingNuevas = true;
  loadingTendencia = true;
  error = false;
  errorMessage = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFeaturedProducts();
    this.loadOnSaleProducts();
    this.loadNewProducts();
    this.loadTrendingProducts();
    this.loadCategories();
  }

  loadFeaturedProducts(): void {
    this.loading = true;
    this.error = false;
    this.productService.getFeaturedProducts().subscribe({
      next: (products) => {
        this.featuredProducts = products;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando productos destacados:', error);
        this.error = true;
        this.errorMessage = 'No se pudieron cargar los productos destacados. Por favor, verifica que el servidor esté ejecutándose.';
        this.loading = false;
      }
    });
  }

  loadOnSaleProducts(): void {
    this.loadingOfertas = true;
    this.productService.getOnSaleProducts().subscribe({
      next: (products) => {
        this.onSaleProducts = products;
        this.loadingOfertas = false;
      },
      error: (error) => {
        console.error('Error cargando productos en oferta:', error);
        this.loadingOfertas = false;
      }
    });
  }

  loadNewProducts(): void {
    this.loadingNuevas = true;
    this.productService.getNewProducts().subscribe({
      next: (products) => {
        this.newProducts = products;
        this.loadingNuevas = false;
      },
      error: (error) => {
        console.error('Error cargando productos nuevos:', error);
        this.loadingNuevas = false;
      }
    });
  }

  loadTrendingProducts(): void {
    this.loadingTendencia = true;
    this.productService.getTrendingProducts().subscribe({
      next: (products) => {
        this.trendingProducts = products;
        this.loadingTendencia = false;
      },
      error: (error) => {
        console.error('Error cargando productos de tendencia:', error);
        this.loadingTendencia = false;
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
        // No mostramos error para categorías ya que no es crítico
      }
    });
  }

  retryLoad(): void {
    this.loadFeaturedProducts();
  }

  testimonials = [
    {
      name: 'María González',
      text: 'La calidad de las prendas es excepcional. Me siento elegante y segura con cada compra.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
    },
    {
      name: 'Ana Rodríguez',
      text: 'El servicio al cliente es increíble. Siempre me ayudan a encontrar el look perfecto.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    },
    {
      name: 'Carmen López',
      text: 'Los diseños son únicos y la atención al detalle es impresionante. ¡Recomendado!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100'
    }
  ];

  onNewsletterSubmit() {
    if (this.newsletterEmail.trim()) {
      console.log('Suscripción al newsletter:', this.newsletterEmail);
      alert('¡Gracias por suscribirte! Te mantendremos informada sobre las últimas tendencias.');
      this.newsletterEmail = '';
    } else {
      alert('Por favor, ingresa un email válido.');
    }
  }

  onCategoryClick(category: Category) {
    // Navegar al catálogo con filtro de categoría
    this.router.navigate(['/catalog'], { queryParams: { category: category.name } });
  }

  onProductClick(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  onExploreCollection() {
    // Navegar al catálogo
    this.router.navigate(['/catalog']);
  }

  onViewOfertas() {
    // Navegar al catálogo con filtro de ofertas
    this.router.navigate(['/catalog'], { queryParams: { filter: 'ofertas' } });
  }

  onViewNuevas() {
    // Navegar al catálogo con filtro de nuevas
    this.router.navigate(['/catalog'], { queryParams: { filter: 'nuevas' } });
  }

  onViewTendencia() {
    // Navegar al catálogo con filtro de tendencia
    this.router.navigate(['/catalog'], { queryParams: { filter: 'tendencia' } });
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`¡${product.name} agregado al carrito!`);
  }

  onAddToWishlist(product: Product) {
    this.cartService.toggleWishlist(product.id);
    const isInWishlist = this.cartService.isInWishlist(product.id);
    if (isInWishlist) {
      alert(`¡${product.name} agregado a tu lista de deseos!`);
    } else {
      alert(`¡${product.name} removido de tu lista de deseos!`);
    }
  }
}
