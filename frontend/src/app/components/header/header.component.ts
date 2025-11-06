import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  searchQuery = '';
  cartCount$: Observable<number>;
  wishlistCount$: Observable<number>;
  showFallbackIcon = false;
  logoUrl = 'http://localhost:3000/images/logo/logo-ana.png';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.cartCount$ = this.cartService.getCartCount();
    this.wishlistCount$ = this.cartService.getWishlistCount();
  }

  ngOnInit(): void {
    // Los observables se suscriben automáticamente en el template
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/catalog'], { queryParams: { search: this.searchQuery } });
    }
  }

  onQuickLinkClick(type: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    
    const routeMap: { [key: string]: any } = {
      'ofertas': { path: '/catalog', queryParams: { filter: 'ofertas' } },
      'nuevas': { path: '/catalog', queryParams: { filter: 'nuevas' } },
      'tendencia': { path: '/catalog', queryParams: { filter: 'tendencia' } },
      'vestidos-noche': { path: '/catalog', queryParams: { category: 'Vestidos Elegantes' } },
      'vestidos-dia': { path: '/catalog', queryParams: { category: 'Vestidos Elegantes' } },
      'vestidos-fiesta': { path: '/catalog', queryParams: { category: 'Vestidos Elegantes' } },
      'vestidos-trabajo': { path: '/catalog', queryParams: { category: 'Vestidos Elegantes' } },
      'blusas-seda': { path: '/catalog', queryParams: { category: 'Blusas y Tops' } },
      'tops-casuales': { path: '/catalog', queryParams: { category: 'Blusas y Tops' } },
      'camisas-elegantes': { path: '/catalog', queryParams: { category: 'Blusas y Tops' } },
      'tops-fiesta': { path: '/catalog', queryParams: { category: 'Blusas y Tops' } },
      'faldas-aline': { path: '/catalog', queryParams: { category: 'Faldas y Shorts' } },
      'faldas-lapiz': { path: '/catalog', queryParams: { category: 'Faldas y Shorts' } },
      'shorts-elegantes': { path: '/catalog', queryParams: { category: 'Faldas y Shorts' } },
      'faldas-maxi': { path: '/catalog', queryParams: { category: 'Faldas y Shorts' } },
      'blazers-elegantes': { path: '/catalog', queryParams: { category: 'Chaquetas y Abrigos' } },
      'abrigos-lujo': { path: '/catalog', queryParams: { category: 'Chaquetas y Abrigos' } },
      'chaquetas-casuales': { path: '/catalog', queryParams: { category: 'Chaquetas y Abrigos' } },
      'trench-coats': { path: '/catalog', queryParams: { category: 'Chaquetas y Abrigos' } },
      'joyeria-fina': { path: '/catalog', queryParams: { category: 'Accesorios' } },
      'bolsos-lujo': { path: '/catalog', queryParams: { category: 'Bolsos de Mano' } },
      'cinturones-elegantes': { path: '/catalog', queryParams: { category: 'Accesorios' } },
      'bufandas-seda': { path: '/catalog', queryParams: { category: 'Accesorios' } },
      'zapatos-tacon': { path: '/catalog', queryParams: { category: 'Zapatos de Tacón' } },
      'zapatos-planos': { path: '/catalog', queryParams: { category: 'Zapatos Planos' } },
      'bolsos-mano': { path: '/catalog', queryParams: { category: 'Bolsos de Mano' } },
      'bolsos-hombro': { path: '/catalog', queryParams: { category: 'Bolsos de Hombro' } }
    };

    const route = routeMap[type];
    if (route) {
      this.router.navigate([route.path], { queryParams: route.queryParams });
    } else {
      this.router.navigate(['/catalog']);
    }
  }

  onDropdownToggle(event: Event) {
    event.preventDefault();
    const dropdown = (event.target as HTMLElement).closest('.dropdown');
    if (dropdown) {
      dropdown.classList.toggle('active');
    }
  }

  onLogoError(event: any) {
    // Si la imagen del logo no se puede cargar, mostrar el icono de fallback
    this.showFallbackIcon = true;
    if (event.target) {
      event.target.style.display = 'none';
    }
  }
}
