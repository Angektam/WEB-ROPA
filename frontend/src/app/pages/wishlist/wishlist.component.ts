import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ProductService, Product } from '../../services/product.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistProducts: Product[] = [];
  loading = true;
  Math = Math;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadWishlistProducts();
  }

  loadWishlistProducts(): void {
    this.loading = true;
    this.cartService.getWishlistItems().subscribe({
      next: (wishlistIds) => {
        if (wishlistIds.length === 0) {
          this.wishlistProducts = [];
          this.loading = false;
          return;
        }

        // Cargar todos los productos de la wishlist
        const productObservables = wishlistIds.map(id => 
          this.productService.getProduct(id)
        );

        forkJoin(productObservables).subscribe({
          next: (products) => {
            this.wishlistProducts = products;
            this.loading = false;
          },
          error: (error) => {
            console.error('Error cargando productos de la wishlist:', error);
            this.loading = false;
          }
        });
      },
      error: (error) => {
        console.error('Error obteniendo wishlist:', error);
        this.loading = false;
      }
    });
  }

  removeFromWishlist(productId: number): void {
    this.cartService.removeFromWishlist(productId);
    this.wishlistProducts = this.wishlistProducts.filter(p => p.id !== productId);
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`¡${product.name} agregado al carrito!`);
  }

  clearWishlist(): void {
    this.wishlistProducts.forEach(product => {
      this.cartService.removeFromWishlist(product.id);
    });
    this.wishlistProducts = [];
  }
}
