import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl:'./offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {


  listeEmploi!:Emploi[]
  nbr!:number
  searchText!:string

  constructor() { }

  ngOnInit(): void {

    this.listeEmploi=[
      {reference:'001',titre:'Assma1',entreprise:'Esprit',etat:false},
      {reference:'002',titre:'Assma2',entreprise:'seasame',etat:true}];
  }
  bilan(){
    this.nbr=0
    for(let i=0;i<this.listeEmploi.length;i++){
      if (this.listeEmploi[i].etat==true)this.nbr++
      
    }

  }
  search(){
    this.listeEmploi=this.listeEmploi.filter((x)=>(x.entreprise.match(this.searchText)||(x.titre.match(this.searchText))))
      }

}
