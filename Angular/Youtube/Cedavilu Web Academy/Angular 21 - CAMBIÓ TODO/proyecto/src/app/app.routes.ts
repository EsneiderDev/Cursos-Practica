import { Routes } from '@angular/router';
import { PaisComponent } from './components/pais-component/pais-component';

export const routes: Routes = [
  { path: '', component: PaisComponent },
  { path: 'paises', component: PaisComponent }
];
