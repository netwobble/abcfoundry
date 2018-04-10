import * as actions from './article-store.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleStore, Article } from './article-store.interfaces';

// Entity adapter
export const articleAdapter = createEntityAdapter<Article>();

export const articleStoreInitialState: ArticleStore = articleAdapter.getInitialState(
  {
    loading: false,
    loaded: false,
    selectedArticleId: null
  }
);

// Reducer

export function articleStoreReducer(
  state: ArticleStore = articleStoreInitialState,
  action: actions.ArticleActions
) {
  switch (action.type) {
    case actions.ADDED:
      console.log('In reducer for SELECTED_ID');
      return articleAdapter.addOne(action.payload, state);

    case actions.CREATE:
      console.log('In reducer for CREATE');
      return articleAdapter.addOne(action.article, state);

    case actions.MODIFIED:
      return articleAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload
        },
        state
      );

    case actions.REMOVED:
      return articleAdapter.removeOne(action.payload.id, state);

    /*    case actions.SELECTED_ID:
      return {...state, selectedArticleId :action.id};*/

    case actions.SELECTED_ID: {
      const articleId = action.id;
      console.log('In reducer for SELECTED_ID', articleId);
      return {
        ...state,
        selectedArticleId: articleId
      };
    }

    default:
      return state;
  }
}

// Create the default selectors

export const getArticleState = createFeatureSelector<ArticleStore>(
  'articleStore'
);

export const {
  selectIds: getArticleIds,
  selectEntities: getArticleEntities,
  selectAll: getAllArticles,
  selectTotal: getTotalArticleCount
} = articleAdapter.getSelectors(getArticleState);

/*export const selectArticleIds = createSelector(getArticleState, selectIds);
export const selectArticleEntities = createSelector(getArticleState, selectEntities);
export const selectAllArticles = createSelector(getArticleState, selectAll);
export const articlesCount = createSelector(getArticleState, selectTotal);*/

export const getSelectedArticleId = (articleStore: ArticleStore) =>
  articleStore.selectedArticleId;

export const getSelectedArticle = createSelector(
  getArticleEntities,
  getSelectedArticleId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const getCurrentArticleId = createSelector(
  getArticleState,
  getSelectedArticleId
);

export const getCurrentArticle = createSelector(
  getArticleEntities,
  getCurrentArticleId,
  (articleEntities, articleId) => articleEntities[articleId]
);
