import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJoueurComponent } from './components/add-joueur/add-joueur.component';
import { DetailsJoueurComponent } from './components/details-joueur/details-joueur.component';
import { ListingComponent } from './components/listing/listing.component';

const routes: Routes = [
  {path:'', component : ListingComponent},
  {path:'add', component : AddJoueurComponent},
  {path:'details/:id', component : DetailsJoueurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
