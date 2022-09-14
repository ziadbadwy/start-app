import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "profile", canActivate: [AuthGuard], component: ProfileComponent },
  { path: "menu", canActivate: [AuthGuard], component: MenuComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
