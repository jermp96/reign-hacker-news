import { News } from './news.model';

export interface NewsResponse {
  hits: News[];
  nbPages: number;
  nbHits: number;
}

