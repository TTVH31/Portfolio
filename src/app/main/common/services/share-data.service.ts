import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  //Declare new Rxjs Subject
  private dataSubject = new Subject<any>();
  
  constructor() { }

  //To Send Data
  sendData(data:any){
    this.dataSubject.next(data)
  }

  //To Recieve Data
  retrieveData():Observable<any>{
    return this.dataSubject.asObservable();
  }
}
