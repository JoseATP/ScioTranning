
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  /* LOGIN */
  { path: 'Login', component: LoginComponent },
  { path: 'login', redirectTo: 'Login', pathMatch: 'full' },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  /* REGISTER */
  { path: 'Register', component: RegisterComponent },
  { path: 'register', redirectTo: 'Register', pathMatch: 'full' },
  /*Artist*/
  { path: 'Artist', component: ArtistComponent },
  { path: 'artist', redirectTo: 'Artist', pathMatch: 'full' },
  /* DEFAULT */
  { path: '**', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }