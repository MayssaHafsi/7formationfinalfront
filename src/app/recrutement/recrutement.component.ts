import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { Formateur } from 'src/model/Formateur';
import { UploadFileService } from 'src/app/upload/upload-file.service';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.scss']
})
export class RecrutementComponent implements OnInit {
   
  formateur: Formateur=new Formateur();
  selectedFiles: FileList;
  currentFileUpload: File;
  fileUploads: Observable<string[]>;
  nom:string;
  n:any;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private uploadService: UploadFileService, public ar:ActivatedRoute,public http:HttpClient ,public route:Router) {
   
   }

  ngOnInit(): void {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.nom=this.currentFileUpload.name
  }
  recrutement()
  {
    this.formateur.etat="EN ATTENTE";
   
    this.http.post('http://localhost:8888/addFormateur', this.formateur).subscribe(data => {console.log(data);
  },error =>{
  console.log("erreur");
}) ;

  
  
  
  

  this.progress.percentage = 0;
  
  this.currentFileUpload = this.selectedFiles.item(0);
  this.uploadService.pushFileToStorage(this.currentFileUpload,this.formateur.email).subscribe(event => {
    this.ngOnInit();
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
   
    } else if (event instanceof HttpResponse) {
      console.log('File is completely uploaded!');
      alert("Recrutement ajouté avec succés")
      this.route.navigate(['acceuil']) ;
  
    }
  }
  
  );
this.nom='';
  this.selectedFiles = undefined;
  
}

retour()
 {
   this.route.navigate(['acceuil'] );
 }
  

}
