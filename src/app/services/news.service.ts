import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from '../../environments/environment'
import { NewsResponse } from '../shared/models/news-response.model';
import { News } from '../shared/models/news.model';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public favorites: Subject<News[]> = new Subject<News[]>();

  constructor(private httpService: HttpClient) {
  }

  /**
   * 
   * @param type reactjs | angular | vuejs
   * @param page number
   * @param pageSize number
   * @returns NewsReponse
   */
  getNews(type: string, page: number, pageSize: number): Observable<NewsResponse> {
    let params = new HttpParams({fromObject: {
      query: type,
      page: page.toString(),
      hitsPerPage: pageSize.toString()
    }});
    return this.httpService.get<NewsResponse>(`${apiUrl}`, {params: params})
  }

  /**
   * 
   * @param news 
   */
  saveFavorite(news: News[]):void {
    localStorage.setItem('favorites', JSON.stringify(news));
  }

  /**
   * 
   * @returns News[]
   */
  getFavorites(): News[] {
    return JSON.parse(localStorage.getItem('favorites') ?? '[]')
  }
}
