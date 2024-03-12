import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DevsModel } from '../models/devs-model';

@Injectable({
  providedIn: 'root'
})
export class InnovatorsService {

  constructor(private http:HttpClient) { }

  getCompleteList(): Observable<DevsModel>{
    return this.http.get<DevsModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}