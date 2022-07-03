import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Output() addFavorite = new EventEmitter<News>();
  @Output() removeFavorite = new EventEmitter<News>();
  @Input() newsItem?: News;


  constructor(public newsService: NewsService) {}

  ngOnInit():void {}

  onAddFavorite():void {
    this.newsItem!.isFavorite = true;
    this.addFavorite.emit(this.newsItem);
  }

  onRemoveFavorite():void {
    this.newsItem!.isFavorite = false;
    this.removeFavorite.emit(this.newsItem);
  }
}
