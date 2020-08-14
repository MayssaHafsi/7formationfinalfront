import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { CourComponent } from './cour/cour.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailformationComponent } from './detailformation/detailformation.component';
import { ThemeformationComponent } from './themeformation/themeformation.component';
import { FormationsComponent } from './formations/formations.component';
import { SommesComponent } from './sommes/sommes.component';
import { DevisComponent } from './devis/devis.component';
import { PropositionComponent } from './proposition/proposition.component';
import { ThemedevisComponent } from './themedevis/themedevis.component';
import { InscrireformationComponent } from './inscrireformation/inscrireformation.component';
import { RecrutementComponent } from './recrutement/recrutement.component'


const routes: Routes = [
  {path:'', component: AcceuilComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'client', component: ClientComponent},
  {path:'contact', component: ContactComponent},
  {path:'cour', component: CourComponent},
  {path:'feature', component: FeatureComponent},
  {path:'footer', component: FooterComponent},
  {path:'formateur', component: FormateurComponent},
  {path:'header', component: HeaderComponent},
  {path:'acceuil', component: AcceuilComponent},
  
  {path:'sommes', component: SommesComponent},
  {path:'recrutement', component: RecrutementComponent},
  {path:'themedevis/:id', component: ThemedevisComponent},
  {path:'devis', component: DevisComponent},
  {path:'proposition', component: PropositionComponent},
  {path:'detailformation/:id', component: DetailformationComponent},
  {path:'inscrireformation/:id', component: InscrireformationComponent},
  {path:'themeformation', component: ThemeformationComponent},
  {path:'formations/:id', component: FormationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
