/**import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
**/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataList: any[] = [];

  // Use BehaviorSubject to emit the current state of dataList
  private dataSubject = new BehaviorSubject<any[]>(this.dataList);

  // Observable for data updates
  data$ = this.dataSubject.asObservable();

  // Add data and notify subscribers
  addData(data: any) {
    this.dataList.push(data);
    this.dataSubject.next(this.dataList);  // Emit the updated data
  }

  // Get the current data (optional)
  getData() {
    return this.dataList;
  }
}

