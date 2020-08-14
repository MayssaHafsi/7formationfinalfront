import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router, ActivatedRoute} from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  to:string;
  text:string ; 
  objet:string ; 

  constructor(public http:HttpClient,public route:Router) { }

 

  ngOnInit(): void {
  }
  
envoie()
{
this.to='mayssahafsi6@gmail.com';
this.text= 'salue';
this.objet= 'bonjour';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
}
}
