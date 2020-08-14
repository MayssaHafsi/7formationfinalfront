import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-themedevis',
  templateUrl: './themedevis.component.html',
  styleUrls: ['./themedevis.component.scss']
})
export class ThemedevisComponent implements OnInit {
 listF:any;
 id:number;
 constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) {

  this.id=ar.snapshot.params.id ; 
     }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/chercherf/'+this.id).subscribe(data => {
      this.listF = data;
     

    }, error => { console.log('ereur') ; } ) ;

  }

  PasserDevis(id:number){
    this.route.navigate(['devis' , id  ] );

  }

  detailFormation(id:number){
    this.route.navigate(['detailformation' , id  ] );

  }
  
  retour()
  {
    this.route.navigate(['acceuil'] );
  }


}
