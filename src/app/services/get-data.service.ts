import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  location: string = "Milan%2C%20Italy"

  constructor(public http: HttpClient) { }

  getJobs(page: number): any {
    return this.http.get('https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=' + page);
  }

  getLevel(level: string, page: number): any {
    console.log(level);
    return this.http.get('https://www.themuse.com/api/public/jobs?category=Software%20Engineering&level=' + level +'&page=' + page);
  }

  getCompany(id: string): any {
    return this.http.get('https://www.themuse.com/api/public/companies/' + id);
  }

}
