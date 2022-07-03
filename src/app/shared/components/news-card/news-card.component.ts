import {Component, Input, OnInit} from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem?: News;

  constructor(public newsService: NewsService) {}

  ngOnInit():void {}

  addFavorite():void {
    
  }

  removeFavorite():void {

  }
}
