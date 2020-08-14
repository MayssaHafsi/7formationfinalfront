import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  id:number ; 
  listDomaine:any ;
  listFormation:any;
  listTheme:any;
  nomDomaine:String;
  sel:number ;
  bl:any;
  constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) {

this.id=ar.snapshot.params.id ;


   }

   

  ngOnInit(): void {
    this.http.get('http://localhost:8888/formations').subscribe(data => {
      this.listFormation = data;
     
     

    }, error => { console.log('ereur') ; } ) ;
   
   
    
    
  }
  detailFormation(id:number){
    this.route.navigate(['detailformation' , id  ] );

  }
  inscrireFormation(id:number){
    this.route.navigate(['inscrireformation' , id  ] );

  }

  forcerTelechargement()
  {
    window.open('assets/images/catalogue7F.pdf');
  }
  



}



