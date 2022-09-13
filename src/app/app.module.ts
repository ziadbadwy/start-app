import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {GalleriaModule} from 'primeng/galleria';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import {DataViewModule} from 'primeng/dataview';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SwiperModule,
    GalleriaModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
