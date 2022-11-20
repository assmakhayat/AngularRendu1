import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    OffresEmploiComponent,
    NotFoundComponent,
    ArticlesComponent
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
