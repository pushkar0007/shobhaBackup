import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';

import { DanceOneComponent } from './services/dance-one/dance-one.component';
import { GallaryComponent } from './gallary/gallary.component';

//Instrument
import { GuitarComponent } from './services/instrument/guitar/guitar.component';
import { DrumsComponent } from './services/instrument/drums/drums.component';
import { KeyboardComponent } from './services/instrument/keyboard/keyboard.component';
import { TablaComponent } from './services/instrument/tabla/tabla.component';
import { MrudangamComponent } from './services/instrument/mrudangam/mrudangam.component';
import { FluteComponent } from './services/instrument/flute/flute.component';

//Fitness
import { ZumbaComponent } from './services/fitness/zumba/zumba.component';
import { AerobicsComponent } from './services/fitness/aerobics/aerobics.component';
import { KalaripayattuComponent } from './services/fitness/kalaripayattu/kalaripayattu.component';
import { YogaComponent } from './services/fitness/yoga/yoga.component';
import { GymnasticsComponent } from './services/fitness/gymnastics/gymnastics.component';

import { CarnaticComponent } from './services/vocal/carnatic/carnatic.component';
import { HindustaniComponent } from './services/vocal/hindustani/hindustani.component';

import { BharatanatyamComponent } from './services/dance/bharatanatyam/bharatanatyam.component';
import { KathakComponent } from './services/dance/kathak/kathak.component';
import { FolkComponent } from './services/dance/folk/folk.component';
import { ContemporaryComponent } from './services/dance/contemporary/contemporary.component';
import { BollywoodComponent } from './services/dance/bollywood/bollywood.component';
import { WesternComponent } from './services/dance/western/western.component';
import { HiphopComponent } from './services/dance/hiphop/hiphop.component';
import { LockingComponent } from './services/dance/locking/locking.component';

import { DanceChoreographyComponent } from './services/event/dance-choreography/dance-choreography.component';
import { SangeethComponent } from './services/event/sangeeth/sangeeth.component';
import { CorporateComponent } from './services/event/corporate/corporate.component';
import { CeremonialComponent } from './services/event/ceremonial/ceremonial.component';
import { GalaComponent } from './services/event/gala/gala.component';
import { PublicComponent } from './services/event/public/public.component';
import { CorporateMeetingComponent } from './services/event/corporate-meeting/corporate-meeting.component';
import { ProductLaunchComponent } from './services/event/product-launch/product-launch.component';
import { AppreciationEventComponent } from './services/event/appreciation-event/appreciation-event.component';
import { TeamBuildingComponent } from './services/event/team-building/team-building.component';

const routes: Routes = [
  
  {path:'home',  component : HomeComponent},
  {path:'aboutus',  component : AboutusComponent},
  {path:'video', component : VideoComponent},
  {path:'gallary', component : GallaryComponent},
  {path:'services/dance-one', component : DanceOneComponent}, 
  //Event
  {path:'services/event/dance-choreography', component : DanceChoreographyComponent},  
  {path:'services/event/sangeeth', component : SangeethComponent},  
  {path:'services/event/corporate', component : CorporateComponent},  
  {path:'services/event/ceremonial', component : CeremonialComponent},  
  {path:'services/event/gala', component : GalaComponent},  
  {path:'services/event/public', component : PublicComponent},  
  {path:'services/event/corporate-meeting', component : CorporateMeetingComponent},  
  {path:'services/event/product-launch', component : ProductLaunchComponent},  
  {path:'services/event/appreciation-event', component : AppreciationEventComponent}, 
  {path:'services/event/team-building', component : TeamBuildingComponent},  

  //Dance
  {path:'services/dance/hiphop', component : HiphopComponent},  
  {path:'services/dance/bharatanatyam/bharatanatyam', component : BharatanatyamComponent},
  {path:'services/dance/kathak', component : KathakComponent}, 
  {path:'services/dance/folk', component : FolkComponent}, 
  {path:'services/dance/contemporary', component : ContemporaryComponent}, 
  {path:'services/dance/bollywood', component : BollywoodComponent},
  {path:'services/dance/western', component : WesternComponent}, 
  {path:'services/dance/locking', component : LockingComponent}, 
  // Instrument
  {path:'services/instrument/guitar', component : GuitarComponent},
  {path:'services/instrument/drums', component : DrumsComponent},
  {path:'services/instrument/keyboard', component : KeyboardComponent},
  {path:'services/instrument/tabla', component : TablaComponent},
  {path:'services/instrument/mrudangam', component : MrudangamComponent},
  {path:'services/instrument/flute', component : FluteComponent},

  {path:'services/vocal/carnatic', component : CarnaticComponent},
  {path:'services/vocal/hindustani', component : HindustaniComponent},

  //fitness
  {path:'services/fitness/zumba', component : ZumbaComponent},
  {path:'services/fitness/aerobics', component : AerobicsComponent},
  {path:'services/fitness/kalaripayattu', component : KalaripayattuComponent},
  {path:'services/fitness/yoga', component : YogaComponent},
  {path:'services/fitness/gymnastics', component : GymnasticsComponent},
  

  

  {path:'contact-us', component : ContactComponent},
  {path:'', redirectTo:'/home', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
