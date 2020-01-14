import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { DanceOneComponent } from './services/dance-one/dance-one.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FormsModule } from '@angular/forms';
import { InstrumentComponent } from './services/instrument/instrument.component';
import { VocalComponent } from './services/vocal/vocal.component';
import { DanceComponent } from './services/dance/dance.component';
import { FitnessComponent } from './services/fitness/fitness.component';
import { EventComponent } from './services/event/event.component';

import { GuitarComponent } from './services/instrument/guitar/guitar.component';
import { KeyboardComponent } from './services/instrument/keyboard/keyboard.component';
import { TablaComponent } from './services/instrument/tabla/tabla.component';
import { MrudangamComponent } from './services/instrument/mrudangam/mrudangam.component';
import { FluteComponent } from './services/instrument/flute/flute.component';
import { DrumsComponent } from './services/instrument/drums/drums.component';

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

import { ZumbaComponent } from './services/fitness/zumba/zumba.component';
import { AerobicsComponent } from './services/fitness/aerobics/aerobics.component';
import { KalaripayattuComponent } from './services/fitness/kalaripayattu/kalaripayattu.component';
import { YogaComponent } from './services/fitness/yoga/yoga.component';
import { GymnasticsComponent } from './services/fitness/gymnastics/gymnastics.component';

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
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    VideoComponent,
    DanceOneComponent,
    ContactComponent,
    ServicesComponent,
    GallaryComponent,
    InstrumentComponent,
    VocalComponent,
    DanceComponent,
    FitnessComponent,
    EventComponent,
    GuitarComponent,
    KeyboardComponent,
    TablaComponent,
    MrudangamComponent,
    FluteComponent,
    DrumsComponent,
    CarnaticComponent,
    HindustaniComponent,
    BharatanatyamComponent,
    KathakComponent,
    FolkComponent,
    ContemporaryComponent,
    BollywoodComponent,
    WesternComponent,
    HiphopComponent,
    LockingComponent,
    ZumbaComponent,
    AerobicsComponent,
    KalaripayattuComponent,
    YogaComponent,
    GymnasticsComponent,
    DanceChoreographyComponent,
    SangeethComponent,
    CorporateComponent,
    CeremonialComponent,
    GalaComponent,
    PublicComponent,
    CorporateMeetingComponent,
    ProductLaunchComponent,
    AppreciationEventComponent,
    TeamBuildingComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
