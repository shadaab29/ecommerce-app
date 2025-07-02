import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent }
];

export const appRoutes = provideRouter(routes);
