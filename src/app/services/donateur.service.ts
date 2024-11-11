import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonateurService {

  constructor(private http : HttpClient) { }
  private url ='http://192.168.177.128:8087/' ;


  ajouterAideDonateur(donateur: any, aide: any, idShelter: any) {
    return this.http.put(this.url + 'Donateur/affect/' + idShelter, { donateur, aide });
  }
  
  calculateTotalAmountAndSheltersList(){
    return this.http.get(this.url +'Donateur/calculateTotalAmountAndSheltersList');
  }
}


 
