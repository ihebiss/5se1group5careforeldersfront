import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';
import { GestionpanierService } from 'src/app/services/gestionpanier.service';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent implements OnInit {
  idPanier: number = 1; 
  nombreTotalProduits: number = 0;
  constructor(private router:Router,
    private userAuthServiceService : UserAuthServiceService,public _gestionPanier: GestionpanierService){

  }
  roleNames: string[] = []; 
  isCuisinier: boolean = false;
  isHomless: boolean= false;
  isPatient: boolean= false;
  isMedecin: boolean= false;
  ngOnInit(): void {
    // Appelez la méthode pour calculer le nombre total de produits dans le panier lors de l'initialisation
   // this.calculerNombreTotalProduitsHeader();
   this.roleNames = this.userAuthServiceService.getRoleNames();
   console.log('Noms des rôles:', this.roleNames);
   this.isCuisinier = this.roleNames.includes('CUISINIER');
   this.isHomless = this.roleNames.includes('HOMELESS');
   this.isMedecin = this.roleNames.includes('MEDECIN');
   this.isPatient = this.roleNames.includes('PATIENT');

   
  }
  public isloged(){
    return  this.userAuthServiceService.isLoggedIn();
  }

  login(){
    this.router.navigate(['/login'])
  }
  logout() {
    this.userAuthServiceService.clear();
    }
    produit(){
      this.router.navigate(['produits'])
    }
    panier(){
      this.router.navigate(['panier'])
    }
    favoris(){
      this.router.navigate(['Favoris'])
    }
    // calculerNombreTotalProduitsHeader(): void {
    //   // Utilisez le service de gestion du panier pour calculer le nombre total de produits dans le panier
    //   this._gestionPanier.calculerNombreProduitsDansPanier(this.idPanier).subscribe(
    //     nombre => {
    //       this.nombreTotalProduits = nombre;
    //     },
    //     err => {
    //       console.log('Erreur lors du calcul du nombre total de produits dans le panier :', err);
    //       // Gérez l'erreur ici, par exemple en affichant un message à l'utilisateur
    //     }
    //   );
    // }


    listecounges(){
      this.router.navigate(['/FrontlisteCounges'])
    }
    ajoutcounges(){
      this.router.navigate(['/ajouterCounge'])
    }
    affRepas(){
      this.router.navigate(['/affRepas'])
    }
    
}
