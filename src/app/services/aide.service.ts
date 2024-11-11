import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AideService {

  constructor(private http : HttpClient) { }
  private url ='http://192.168.177.128:8087/' ;


  createNewAide(aide: any){
    return this.http.post(this.url + 'Aide/addAide' , aide);
  }
  
  getAllAides(){
    return this.http.get(this.url +'Aide/allAide');
  }
  deleteAide(id:number){
    return this.http.delete(this.url +'Aide/RemoveAide/' + id);
  }
  getAideById(id:number){
    return this.http.get(this.url + 'Aide/Aide/' + id);
  }
  updateAide(aide:any){
    return this.http.put(this.url + 'Aide/UpdateAide' ,aide);

  }
}
