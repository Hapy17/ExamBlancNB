import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from 'src/app/models/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-details-joueur',
  templateUrl: './details-joueur.component.html',
  styleUrls: ['./details-joueur.component.css']
})
export class DetailsJoueurComponent implements OnInit {

  joueur ! :Joueur;

  constructor(private activatedRoute : ActivatedRoute, private joueurService : JoueurService) { }

  ngOnInit(): void {
    let id: number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.joueurService.getById(id).subscribe(data=>{
      this.joueur=data;
    })
  }
}
