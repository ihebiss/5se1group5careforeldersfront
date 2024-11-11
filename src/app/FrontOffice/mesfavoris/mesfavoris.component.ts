import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-mesfavoris',
  templateUrl: './mesfavoris.component.html',
  styleUrls: ['./mesfavoris.component.css']
})
export class MesfavorisComponent implements OnInit {
  produitsFavoris: any[] = []; // Tableau pour stocker les produits favoris

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.getProduitsFavoris();
  }

  getProduitsFavoris(): void {
    // Appeler le service pour récupérer les produits favoris pour l'utilisateur avec l'id 1
    this.produitService.getProduitsFavoris(1).subscribe(
      (produits: any[]) => {
        this.produitsFavoris = produits;
      },
      error => {
        console.error('Erreur lors de la récupération des produits favoris :', error);
      }
    );
  }

  supprimerProduitFavori(idProduit: number): void {
    // Appeler le service pour supprimer le produit favori
    this.produitService.supprimerProduitDesFavoris(1, idProduit).subscribe(
      () => {
        // Mettre à jour la liste des produits favoris après la suppression
        this.getProduitsFavoris();
      },
      error => {
        console.error('Erreur lors de la suppression du produit favori :', error);
      }
    );
  }
}

