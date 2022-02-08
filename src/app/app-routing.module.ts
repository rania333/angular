import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProdComponentComponent } from './add-prod-component/add-prod-component.component';
import { EditProdComponentComponent } from './edit-prod-component/edit-prod-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'order', component: CartComponentComponent, canActivate:[AuthGuard]},
  {path: 'products/:id', component: ProductDetailsComponent},
  // {path: 'addProd', component: AddProdComponentComponent},
  {path: 'addProd', component: EditProdComponentComponent},
  {path: 'editProd/:id', component: EditProdComponentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path:'user', loadChildren: () => import('../app/models/user/user.module')
  .then(m => m.UserModule) },
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
