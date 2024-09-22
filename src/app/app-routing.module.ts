import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterUserComponent} from 'src/app/components/register-user/register-user.component'
import {LoginComponent} from 'src/app/components/login/login.component'
import {ProductsComponent} from 'src/app/components/products/products.component'
import {ProductsByTypeComponent} from 'src/app/components/products-by-type/products-by-type.component'
import {EditProductByNameComponent} from 'src/app/components/edit-product-by-name/edit-product-by-name.component'
import {DeleteProductComponent} from 'src/app/components/delete-product/delete-product.component'
import {NavigationComponent} from 'src/app/components/navigation/navigation.component'


const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'allProducts', component: ProductsComponent },
  { path: 'allProductsByType', component: ProductsByTypeComponent },
  { path: 'editProduct', component:EditProductByNameComponent },
  { path: 'deleteProduct', component:DeleteProductComponent },

  // { path: 'home',component:NavigationComponent},

  { path: '**', redirectTo: '/register' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
