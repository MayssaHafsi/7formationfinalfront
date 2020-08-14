import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/model/Domaine';
import { Formateur } from 'src/model/Formateur';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  id:number ; 
  listDomaine:any ;
  listFormateur:any;
  list:any;
  listT:any;
  nomDomaine:String;
  sel:number ;
  domaine:Domaine=new Domaine();
  constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) {

this.id=ar.snapshot.params.id ; 
   }
 

  ngOnInit(): void {
    this.http.get('http://localhost:8888/domaines').subscribe(data => {
      this.listDomaine = data;
     

    }, error => { console.log('ereur') ; } ) ;


   

    
  }

  Domaines():void{
    this.http.get('http://localhost:8888/domaines').subscribe(data => {
      this.listDomaine = data;
     

    }, error => { console.log('ereur') ; } ) ;

  }
  listTheme(id:number){
    this.route.navigate(['formations' , id  ] );

  }

  


  
  

}
