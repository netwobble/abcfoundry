import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from './article-store.interfaces';

export function sortByCategory(ob1: Article, ob2: Article): number {
  return ob1.category.localeCompare(ob2.category);
}

/*
export const articleAdapter: EntityAdapter<Article> = createEntityAdapter<Article>();
*/

export const articleAdapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  sortComparer: sortByCategory
});
