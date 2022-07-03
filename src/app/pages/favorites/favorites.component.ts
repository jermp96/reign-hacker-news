import {Component, OnInit} from '@angular/core';
import {NewsService} from 'src/app/services/news.service';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorite.component.html'
})

export class FavoritesComponent implements OnInit {
  public favorites?: News[];
  constructor(private newsService: NewsService) {
    this.newsService.favorites.subscribe({next: (res) => {this.getFavorites}});
  }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites():void {
    this.favorites = this.newsService.getFavorites();
  }

  removeFavorites(event: News):void {
    const idx = this.favorites?.indexOf(event);
    this.favorites?.splice(idx!, 1);
    this.newsService.saveFavorite(this.favorites!);
    this.newsService.favorites.next(this.favorites!);
  }
}