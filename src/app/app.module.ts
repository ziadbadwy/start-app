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
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { MenuComponent } from './menu/menu.component';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SwiperModule,
    GalleriaModule,
    HttpClientModule,
    DataViewModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    CarouselModule,
    ToastModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
