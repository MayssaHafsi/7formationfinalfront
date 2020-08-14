import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Demandeur } from 'src/model/Demandeur';
import { Devis } from 'src/model/Devis';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  id:number; 
  devis:Devis=new Devis();
  demandeur:Demandeur=new Demandeur() ;
  listTheme :any ;
  list:any;
  Listemail:any;
  constructor(public route:Router,public http:HttpClient,public ar:ActivatedRoute) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    

    this.http.get('http://localhost:8888/formation/').subscribe(data => {
      this.list = data;
       
  
      }, error => { console.log('ereur') ; } ) ;

  
  }


  
    devisf(){
      
       
     this.http.get('http://localhost:8888/findEmail/'+this.demandeur.email).subscribe(data => {
     this.Listemail=data;
 
      },error =>{
      console.log("erreur");
    }) ;

     
    if (this.Listemail !=null )
     {
      this.devis.etat="EN ATTENTE" ;
      this.devis.demandeur=this.demandeur ;
      
    
        this.http.post('http://localhost:8888/addDevisf',this.devis).subscribe(data => {console.log(data);
        alert("Devis ajouté avec succés")
        this.route.navigate(['acceuil']) ;
        },error =>{
        console.log("erreur");
      }) ;
     }
     else{

      this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(data => {console.log(data);
 
      },error =>{
      console.log("erreur");
    }) ;
       
   
    this.devis.etat="EN ATTENTE" ;
    this.devis.demandeur=this.demandeur ;
    
  
      this.http.post('http://localhost:8888/addDevisf',this.devis).subscribe(data => {console.log(data);
      alert("Devis passé avec succés")
      this.route.navigate(['acceuil']) ;
      },error =>{
      console.log("erreur");
    }) ;

     

     }
 



}
retour()
 {
   this.route.navigate(['acceuil'] );
 }
}