import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<Object> {
    return of(DATA);
  }
}
