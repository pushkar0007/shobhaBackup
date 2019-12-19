import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { DanceOneComponent } from './services/dance-one/dance-one.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BollywoodComponent } from './services/dance/bollywood/bollywood.component';
import { HiphopComponent } from './services/dance/hiphop/hiphop.component';
import { BharatanatyamComponent } from './services/dance/bharatanatyam/bharatanatyam.component';

//Fitness
import { ZumbaComponent } from './services/fitness/zumba/zumba.component';
import { AerobicsComponent } from './services/fitness/aerobics/aerobics.component';



const routes: Routes = [
  
  {path:'home',  component : HomeComponent},
  {path:'video', component : VideoComponent},
  {path:'gallary', component : GallaryComponent},
  {path:'services/dance/bollywood', component : BollywoodComponent},
  {path:'services/dance/hiphop', component : HiphopComponent},
  {path:'services/dance-one', component : DanceOneComponent},
  {path:'services/dance/bharatanatyam/bharatanatyam', component : BharatanatyamComponent},
  //fitness
  {path:'services/fitness/zumba', component : ZumbaComponent},
  {path:'services/fitness/aerobics', component : AerobicsComponent},
  {path:'contact-us', component : ContactComponent},
  {path:'', redirectTo:'/home', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
