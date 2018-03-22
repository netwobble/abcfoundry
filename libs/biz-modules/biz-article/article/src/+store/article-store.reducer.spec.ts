import { articleStoreReducer } from './article-store.reducer';
import { articleStoreInitialState } from './article-store.init';
import { ArticleStore } from './article-store.interfaces';
import { DataLoaded } from './article-store.actions';

describe('articleStoreReducer', () => {
  it('should work', () => {
    const state: ArticleStore = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = articleStoreReducer(state, action);
    expect(actual).toEqual({});
  });
});
