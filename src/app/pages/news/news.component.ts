import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import {Option} from "../../models/option.model";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news-component',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {
  public options: Option[];
  public optionSelected?: Option;

  public newsList?: News[] = [];

  // pagination
  public page?: number = 0;
  public limitPages?: number;
  public pageSize: number = 10;

  constructor(private newsService: NewsService) {
    this.options = [
      {icon: 'icon-a', label: 'Angular', value: 'angular'},
      {icon: 'icon-r', label: 'Reactjs', value: 'reacts'},
      {icon: 'icon-v', label: 'Vuejs', value: 'vue'}
    ];
  }

  ngOnInit() { }

  onChangeSelection(event: Option):void{
    this.getNews(event.value, this.page!);
  }

  getNews(type: string, page: number) {
    this.newsService.getNews(type, page, this.pageSize).subscribe({
      next: (res) => {
        this.newsList = res.hits;
        this.limitPages = res.nbPages;
        console.log(this.newsList);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
