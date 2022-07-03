export interface News{
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
  created_at_i: number;
  story_id?: number;
  objectID: string;
  isFavorite: boolean;
}