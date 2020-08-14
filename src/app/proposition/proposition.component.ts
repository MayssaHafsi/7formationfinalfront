import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Demandeur } from 'src/model/Demandeur';
import { Proposition } from 'src/model/Proposition';


@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss']
})
export class PropositionComponent implements OnInit {

  id:number; 
  proposition: Proposition=new Proposition();
  demandeur:Demandeur=new Demandeur() ;
  
  Listemail:any;
  constructor(public route:Router,public http:HttpClient,public ar:ActivatedRoute) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
  }


  propositionf()
  {
    this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(data => {console.log(data);
 
  },error =>{
  console.log("erreur");
}) ;
   

this.proposition.etat="EN ATTENTE";
this.proposition.demandeur=this.demandeur ;
this.proposition.dateProposition=new Date;


  this.http.post('http://localhost:8888/addproposition',this.proposition).subscribe(data => {console.log(data);
  alert("Proposition ajouté avec succés")
  this.route.navigate(['acceuil']) ;
  
  },error =>{
  console.log("erreur");
}) ;

 }

 


 retour()
 {
   this.route.navigate(['acceuil'] );
 }

  
  

  }


