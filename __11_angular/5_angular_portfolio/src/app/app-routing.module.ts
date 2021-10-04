import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from  './Components/home/home.component';
import { AboutComponent } from  './Components/about/about.component';
import { ContactComponent } from  './Components/contact/contact.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';

const routes: Routes = [
  {
  path:  'Components/home',
  component:  HomeComponent, pathMatch: 'full',
  data: {
    title: 'Lau O.J.',
    descrption: 'El portfolio de programadora de Lau O.J.',
    ogTitle: 'lau o.j. programació web',
  }
  },
  {
  path:  'Components/about',
  component:  AboutComponent, pathMatch: 'full',
  data: {
    title: 'Qui soc?',
    descrption: 'Sobre mi',
    ogTitle: 'Qui és Lau O.J.',
  }
  },
  {
  path:  'Components/contact',
  component:  ContactComponent, pathMatch: 'full',
  data: {
    title: 'Contacta\'m',
    descrption: 'Conctacte',
    ogTitle: 'Contacta amb mi, Lau O.J.',
  }
  },
  {
    path:  'Components/portfolio',
    component:  PortfolioComponent, pathMatch: 'full',
    data: {
      title: 'Projectes',
      descrption: 'Projectes de Lau O.J.',
      ogTitle: 'Projectes de Lau O.J.',
    }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
