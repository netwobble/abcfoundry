import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { ArticleStoreEffects } from './article-store.effects';

describe('ArticleStoreEffects', () => {
  let actions;
  let effects: ArticleStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        ArticleStoreEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ArticleStoreEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(effects.loadData).toBeObservable(
        hot('-a-|', { a: { type: 'DATA_LOADED', payload: {} } })
      );
    });
  });
});
