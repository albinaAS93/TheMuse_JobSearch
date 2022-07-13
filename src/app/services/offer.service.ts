import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private dataSource = new BehaviorSubject({});
  currentData = this.dataSource.asObservable();

  constructor() { }

  updateData(data: string){ //For modify dataSource
    this.dataSource.next(data);
  }


}
