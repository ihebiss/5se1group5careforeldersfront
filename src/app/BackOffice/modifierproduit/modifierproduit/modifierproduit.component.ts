import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent {

  constructor(private service:ProduitService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
produit:any
  idProduit:any


  routeSub!: Subscription;
  modifierProduit(){
    this.service.modifierProduit(this.produit,).subscribe(
      res => {
        
        console.log(res)
        this.router.navigate(['/admin/listProduit']);

      },
      err => {
        console.log(err); 
      }
    );





  }
  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.paramMap.get('idProduit');

    this.service.getProduit(this.idProduit) 
      .subscribe(
        res => {
          this.produit= res;
        },
        err => {
          console.log(err);
        }
      );
  }


 
}
