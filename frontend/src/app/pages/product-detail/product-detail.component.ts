import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error = false;
  errorMessage = '';
  selectedSize: string = '';
  selectedColor: string = '';
  quantity: number = 1;
  Math = Math;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.loadProduct(id);
      }
    });
  }

  loadProduct(id: number): void {
    this.loading = true;
    this.error = false;
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
        if (product.sizes && product.sizes.length > 0) {
          this.selectedSize = product.sizes[0];
        }
        if (product.colors && product.colors.length > 0) {
          this.selectedColor = product.colors[0];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando producto:', error);
        this.error = true;
        this.errorMessage = 'No se pudo cargar el producto. Por favor, intenta nuevamente.';
        this.loading = false;
      }
    });
  }

  onAddToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.selectedSize, this.selectedColor);
      alert(`¡${this.product.name} agregado al carrito!`);
    }
  }

  onAddToWishlist(): void {
    if (this.product) {
      this.cartService.toggleWishlist(this.product.id);
      const isInWishlist = this.cartService.isInWishlist(this.product.id);
      if (isInWishlist) {
        alert(`¡${this.product.name} agregado a tu lista de deseos!`);
      } else {
        alert(`¡${this.product.name} removido de tu lista de deseos!`);
      }
    }
  }

  isInWishlist(): boolean {
    return this.product ? this.cartService.isInWishlist(this.product.id) : false;
  }

  increaseQuantity(): void {
    if (this.product && this.product.stock) {
      if (this.quantity < this.product.stock) {
        this.quantity++;
      }
    } else {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  goBack(): void {
    this.router.navigate(['/catalog']);
  }
}

