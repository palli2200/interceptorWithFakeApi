import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path:'', redirectTo:'/products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutusComponent},
  {path:"contact", component:ContactComponent, canActivate:[AuthService]},
  { path: 'customers', loadChildren: () => import('./components/customers/customers.module').then(m => m.CustomersModule) },




  {path:"**", component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
