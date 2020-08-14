import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CourComponent } from './cour/cour.component';
import { ContactComponent } from './contact/contact.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailformationComponent } from './detailformation/detailformation.component';
import { InscrireformationComponent } from './inscrireformation/inscrireformation.component';
import { AnimationComponent } from './animation/animation.component';
import { ThemeformationComponent } from './themeformation/themeformation.component';
import { FormationsComponent } from './formations/formations.component';
import { DevisComponent } from './devis/devis.component';
import { PropositionComponent } from './proposition/proposition.component';

import { SommesComponent } from './sommes/sommes.component';
import { ThemedevisComponent } from './themedevis/themedevis.component';
import { RecrutementComponent } from './recrutement/recrutement.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CourComponent,
    ContactComponent,
    FormateurComponent,
    FeatureComponent,
    AboutComponent,
    ClientComponent,
    FooterComponent,
    AcceuilComponent,
    DetailformationComponent,
    InscrireformationComponent,
    AnimationComponent,
    ThemeformationComponent,
    FormationsComponent,
    DevisComponent,
    PropositionComponent,
    SommesComponent,
    ThemedevisComponent,
    RecrutementComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    
    
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
