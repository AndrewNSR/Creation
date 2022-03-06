import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { CareerComponent } from './career/career.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { ZerosectionComponent } from './zerosection/zerosection.component';
import { CaroComponent } from './caro/caro.component';
import { Caro2Component } from './caro2/caro2.component';
import { Caro3Component } from './caro3/caro3.component';
import { Caro4Component } from './caro4/caro4.component';
import { Caro5Component } from './caro5/caro5.component';
import { Caro6Component } from './caro6/caro6.component';
import { Caro7Component } from './caro7/caro7.component';
import { CustomersComponent } from './customers/customers.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    BlogComponent,
    PortfolioComponent,
    ServicesComponent,
    CareerComponent,
    WorkComponent,
    HomeComponent,
    ZerosectionComponent,
    CaroComponent,
    Caro2Component,
    Caro3Component,
    Caro4Component,
    Caro5Component,
    Caro6Component,
    Caro7Component,
    ServicesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SwiperModule
    
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
