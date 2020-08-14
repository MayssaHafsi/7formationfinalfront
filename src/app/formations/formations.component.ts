import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  id:number ; 
  listFormation:any;

  constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) {

    this.id=ar.snapshot.params.id ; 
       }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/chercherf/'+this.id).subscribe(data => {
      this.listFormation = data;
       
  
      }, error => { console.log('ereur') ; } ) ;

  }

  detailFormation(id:number){
    this.route.navigate(['detailformation' , id  ] );

  }
  inscrireFormation(id:number){
    this.route.navigate(['inscrireformation' , id  ] );

  }

  retour()
  {
    this.route.navigate(['acceuil'] );
  }

}
