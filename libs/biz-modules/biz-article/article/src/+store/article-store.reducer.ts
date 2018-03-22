import { ArticleStore } from './article-store.interfaces';
import { ArticleStoreAction } from './article-store.actions';

export function articleStoreReducer(
  state: ArticleStore,
  action: ArticleStoreAction
): ArticleStore {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
