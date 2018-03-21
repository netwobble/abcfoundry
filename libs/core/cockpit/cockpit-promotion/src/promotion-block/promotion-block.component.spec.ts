import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBlockComponent } from './promotion-block.component';

describe('PromotionBlockComponent', () => {
  let component: PromotionBlockComponent;
  let fixture: ComponentFixture<PromotionBlockComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PromotionBlockComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
