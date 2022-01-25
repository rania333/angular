import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FormsModule } from '@angular/forms';
import { ProductCardDirDirective } from './product-card-dir.directive';
import { CustomPopePipe } from './custom-pope.pipe';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { AddProdComponentComponent } from './add-prod-component/add-prod-component.component';
import { EditProdComponentComponent } from './edit-prod-component/edit-prod-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SidemenuComponent,
    ProductCardDirDirective,
    CustomPopePipe,
    CustomPipePipe,
    CartComponentComponent,
    AddProdComponentComponent,
    EditProdComponentComponent,
    ProductDetailsComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
