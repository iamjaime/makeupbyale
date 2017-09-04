import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    SingleServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'about',
        component : AboutComponent
      },
      {
        path : 'services',
        component : ServicesComponent
      },
      {
        path : 'single-service',
        component : SingleServiceComponent
      },
      {
        path : 'portfolio',
        component : PortfolioComponent
      },
      {
        path : 'contact',
        component : ContactComponent
      }
    ])
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
