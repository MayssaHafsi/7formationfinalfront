import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.scss']
})
export class CourComponent implements OnInit {
  id:number ; 
  listDomaine:any ;
  listFormateur:any;
  listTheme:any;
  nomDomaine:String;
  sel:number ;
  constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) {

this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/formateurs').subscribe(data => {
      this.listFormateur = data;
      
     

    }, error => { console.log('ereur') ; } ) ;
  }

}
