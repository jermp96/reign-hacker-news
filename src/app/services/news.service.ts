import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from '../../environments/environment'
import { NewsResponse } from '../shared/models/news-response.model';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpService: HttpClient) {
  }

  getNews(type: string, page: number, pageSize: number): Observable<NewsResponse> {
    let params = new HttpParams({fromObject: {
      query: type,
      page: page.toString(),
      hitsPerPage: pageSize.toString()
    }});
    return this.httpService.get<NewsResponse>(`${apiUrl}`, {params: params})
  }

  
}
