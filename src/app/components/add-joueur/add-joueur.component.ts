import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Joueur } from 'src/app/models/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  joueurForm: Joueur = new Joueur();

  constructor(private joueurService: JoueurService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.joueurService.add(this.joueurForm).subscribe(data => {
      this.toastr.success('Ajout réussi', 'Bravo !');
      this.router.navigate(['/']);
    })
  }
}
