import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/model/Theme';
import { Domaine } from 'src/model/Domaine';
@Component({
  selector: 'app-themeformation',
  templateUrl: './themeformation.component.html',
  styleUrls: ['./themeformation.component.scss']
})
export class ThemeformationComponent implements OnInit {
   id:number ;
   listD:any ;
   domaine:Domaine=new Domaine();

constructor(public route:Router,public http:HttpClient,public ar:ActivatedRoute) {
  this.id=ar.snapshot.params.id ; 
 }

  ngOnInit(): void {

    this.http.get('http://localhost:8888/domaines').subscribe(data => {
      this.listD = data;
     

    }, error => { console.log('ereur') ; } ) ;

  }

  devis(id:number){
    this.route.navigate(['themedevis' , id  ] );

  }
  }


