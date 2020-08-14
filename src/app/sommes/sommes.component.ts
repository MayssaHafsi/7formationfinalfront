import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sommes',
  templateUrl: './sommes.component.html',
  styleUrls: ['./sommes.component.scss']
})
export class SommesComponent implements OnInit {

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
   
   }

  ngOnInit(): void {
  }

  retour()
  {
    this.route.navigate(['acceuil'] );
  }

}
