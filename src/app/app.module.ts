import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsByTypeComponent } from './components/products-by-type/products-by-type.component';
import { EditProductByNameComponent } from './components/edit-product-by-name/edit-product-by-name.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    NavigationComponent,
    RegisterUserComponent,
    LoginComponent,
    ProductsComponent,
    ProductsByTypeComponent,
    EditProductByNameComponent,
    DeleteProductComponent,
    UpdateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
