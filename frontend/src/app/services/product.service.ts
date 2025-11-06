import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isOnSale?: boolean;
  isNew?: boolean;
  description: string;
  sizes?: string[];
  colors?: string[];
  material?: string;
  care?: string;
  inStock?: boolean;
  stock?: number;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?category=${category}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?isOnSale=true&_limit=6`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getNewProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?isNew=true&_limit=6`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getOnSaleProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?isOnSale=true&_limit=6`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getTrendingProducts(): Observable<Product[]> {
    // Productos con mejor rating (tendencia)
    return this.http.get<Product[]>(`${this.apiUrl}/products?_sort=rating&_order=desc&_limit=6`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?name_like=${query}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}

