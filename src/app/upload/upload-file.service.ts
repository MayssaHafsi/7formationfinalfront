import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  id:number
  constructor(public http: HttpClient,public ar:ActivatedRoute) {this.id=ar.snapshot.params.id; }


  
  pushFileToStorage(file: File, email:string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
  
 
 
    const req = new HttpRequest('POST', 'http://localhost:8888/api1/file1/upload1/'+email,formdata,{
      
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
  getFiles(id:number): Observable<any> {
    return this.http.get('http://localhost:8888/api/file1/tous/'+id);
  }
}
