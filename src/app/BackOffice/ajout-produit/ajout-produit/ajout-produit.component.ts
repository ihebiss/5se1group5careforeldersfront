import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {
  constructor(private service:ProduitService,private router:Router,) {

  }
  produit = {
    nomproduit: '',
    description: '',
    prix: 0
   

  };
  ajouterProduit(){
    this.service.ajouterProduit(this.produit ,).subscribe(
      res => {
        this.produit  = {
          nomproduit: '',
          description: '',
          prix: 0
        
        };
        console.log(res)
        this.router.navigate(['/admin/listProduit']);

      },
      err => {
        console.log(err); 
      }
    );

}
}