import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Joueur } from 'src/app/models/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listJoueurs ?: Joueur[];

  constructor(private joueurService : JoueurService, private toastr : ToastrService) { }

  ngOnInit(): void {

    this.joueurService.getAll().subscribe(data => {
      this.listJoueurs = data;
    })
  }

  delete(id:number){
    this.joueurService.delete(id).subscribe(data => {
      this.toastr.error('Suppression réussie', 'Bravo !');
      this.ngOnInit();
    })
  }
}
