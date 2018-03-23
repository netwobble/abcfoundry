import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleQueryComponent } from './article-query/article-query.component';
import { ArticleQueryDisplayComponent } from './article-query-display/article-query-display.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleCreateDisplayComponent } from './article-create-display/article-create-display.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ArticleUpdateDisplayComponent } from './article-update-display/article-update-display.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ArticleReadDisplayComponent } from './article-read-display/article-read-display.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { articleStoreReducer } from './+store/article-store.reducer';
// import { articleStoreInitialState } from './+store/article-store.init';
import { ArticleStoreEffects } from './+store/article-store.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: ArticleQueryComponent },
      { path: 'create', component: ArticleCreateComponent },
      { path: 'read/:id', component: ArticleReadComponent },
      { path: 'update/:id', component: ArticleUpdateComponent },
    ]),
    StoreModule.forFeature('articleStore', articleStoreReducer),
    EffectsModule.forFeature([ArticleStoreEffects])
  ],
  declarations: [
    ArticleQueryComponent,
    ArticleQueryDisplayComponent,
    ArticleCreateComponent,
    ArticleCreateDisplayComponent,
    ArticleUpdateComponent,
    ArticleUpdateDisplayComponent,
    ArticleReadComponent,
    ArticleReadDisplayComponent
  ],
  providers: [ArticleStoreEffects]
})
export class ArticleModule {}
