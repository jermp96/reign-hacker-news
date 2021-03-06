import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';
import {Option} from "../../shared/models/option.model";
import {NewsService} from "../../services/news.service";
import { filter, map } from 'rxjs';
import { NewsResponse } from 'src/app/shared/models/news-response.model';

@Component({
  selector: 'app-news-component',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {
  public options: Option[];
  public optionSelected?: Option;

  public newsList?: News[] = [];
  public favorites?: News[];

  // pagination
  public page?: number = 0;
  public limitItems?: number;
  public pageSize: number = 10;

  constructor(private newsService: NewsService) {
    this.options = [
      {icon: 'icon-a', label: 'Angular', value: 'angular'},
      {icon: 'icon-r', label: 'Reactjs', value: 'reactjs'},
      {icon: 'icon-v', label: 'Vuejs', value: 'vuejs'}
    ];

    this.newsService.favorites.subscribe({next: (res) =>{this.getFavorites}});
  }

  ngOnInit():void {
    this.getFavorites();
    this.getInitData();
  }

  /**
   * changing filter
   * @param event 
   */
  onChangeSelection(event: Option):void {
    this.optionSelected = event;
    this.newsService.saveFilter(event);
    this.newsList = [];
    this.page = 0;
    this.getNews(event.value, this.page!);
  }

  /**
   * @param type:  
   * @param page 
   */
  getNews(type: string, page: number) {
    this.newsService.getNews(type, page, this.pageSize).subscribe({
      next: (res) => {
        const toAdd = this.cleanResponse(res);
        this.newsList = [...this.newsList!, ...toAdd];
        this.setFavorites();
        this.limitItems = res.nbHits;
        this.page!++;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  /**
   * to clean API hits array response
   * @param res: NewsResponse 
   * @returns News[]
   */
  cleanResponse(res: NewsResponse): News[] {
    return res.hits.filter(el => el.author !== null && el.story_title !== null &&
      el.story_url !== null && el.created_at !== null);
  }

  /**
   * set as favorite each item news regard the favorites list
   */
  setFavorites():void{
    if(this.favorites && this.favorites.length > 0) {
      this.favorites?.forEach(fv => {
        const exist = this.newsList!.find(n => n.objectID === fv.objectID);
        if(exist){
          exist.isFavorite = true;
        }
      });
    }
  }

  /**
   * get the favorites stored
   */
  getFavorites():void {
    this.favorites = this.newsService.getFavorites();
  }

  /**
   * get news if there is a filer stored
   */
  getInitData():void {
    this.optionSelected = this.newsService.getFilter();
    if(this.optionSelected){
      this.getNews(this.optionSelected.value, this.page!);
    }
  }

  saveFavorites(event: News):void {
    this.favorites = [...this.favorites!, event];
    this.newsService.saveFavorite(this.favorites);
  }

  removeFavorites(event: News):void {
    const idx = this.favorites?.indexOf(event);
    this.favorites?.splice(idx!, 1);
    this.newsService.saveFavorite(this.favorites!);
  }

  scrollDown():void {
    if(this.newsList?.length! <= this.limitItems!){
      this.getNews(this.optionSelected?.value!, this.page!);
    }
  }
}
