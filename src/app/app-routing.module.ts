import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { DanceOneComponent } from './services/dance-one/dance-one.component';
import { GallaryComponent } from './gallary/gallary.component';



const routes: Routes = [
  
  {path:'home',  component : HomeComponent},
  {path:'video', component : VideoComponent},
  {path:'gallary', component : GallaryComponent},
  {path:'services/dance-one', component : DanceOneComponent},
  {path:'contact-us', component : ContactComponent},
  {path:'', redirectTo:'/home', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
