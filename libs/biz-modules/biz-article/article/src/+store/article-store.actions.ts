import { Action } from '@ngrx/store';
import { Article } from './article-store.interfaces';

export const QUERY = '[Article] query articles';
export const READ = '[Article] read';

export const ADDED = '[Article] added';
export const MODIFIED = '[Article] modified';
export const REMOVED = '[Article] removed';

export const UPDATE = '[Article] update';
export const SUCCESS = '[Article] update success';

export const SELECTED_ID = '[Article] selected id';

// Initial query
export class Query implements Action {
  readonly type = QUERY;
  constructor() {}
}

// AngularFire2 StateChanges
export class Added implements Action {
  readonly type = ADDED;
  constructor(public payload: Article) {}
}

export class Modified implements Action {
  readonly type = MODIFIED;
  constructor(public payload: Article) {}
}

export class Removed implements Action {
  readonly type = REMOVED;
  constructor(public payload: Article) {}
}

// Run a Firestore Update
export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<Article>) {}
}

export class Success implements Action {
  readonly type = SUCCESS;
  constructor() {}
}

// Read
export class Read implements Action {
  readonly type = READ;
  constructor(public payload: Article) {}
}

// Selected ID
export class SelectedID implements Action {
  readonly type = SELECTED_ID;
  constructor(public id: string) {}
}

export type ArticleActions = Query | Read | Added | Modified | Removed | Update | Success | SelectedID;

/*

export class Read implements Action {
  readonly type = READ;
  constructor(public id: string) {}
}


export class SelectedID implements Action {
  readonly type = SELECTED_ID;
  constructor(public payload: {articleId: string} ) {}
}
*/
