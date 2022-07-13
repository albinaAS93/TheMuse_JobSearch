import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'https://www.themuse.com/api/public';

  getJobs(level: string, page: number) {
    console.log(level,page);
    return this.http.get(
      `https://www.themuse.com/api/public/jobs?category=Software%20Engineering&level=${level}&page=${page}`
    )
  }

  getCompany(id: any) {
    return this.http.get(
      `https://www.themuse.com/api/public/companies/${id}`
    )
  }

}
