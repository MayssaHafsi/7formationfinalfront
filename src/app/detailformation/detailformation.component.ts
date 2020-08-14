import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/model/Formation';
import { HttpClient } from '@angular/common/http';
import { Route, ActivatedRoute, Router } from '@angular/router';



import { Observable } from 'rxjs';
@Component({
  selector: 'app-detailformation',
  templateUrl: './detailformation.component.html',
  styleUrls: ['./detailformation.component.scss']
})
export class DetailformationComponent implements OnInit {
  id:number ; 
  fo:Formation=new Formation();
  listes:any ; 
  liste:any;
  modr:number=1;
  listeInscrits:any ; 
  fileUploads: Observable<string[]>;
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }
  ngOnInit(): void {
    this.http.get('http://localhost:8888/chercherFormationG/'+this.id).subscribe(data => {
      // @ts-ignore
      this.fo= data ;
      console.log(this.fo);
 
    }, error => { console.log('ereur') ; } )  ;

    
  
  }
  retour()
  {
    this.route.navigate(['acceuil'] );
  }

}
