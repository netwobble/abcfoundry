import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionContainerComponent } from './promotion-container.component';

describe('PromotionContainerComponent', () => {
  let component: PromotionContainerComponent;
  let fixture: ComponentFixture<PromotionContainerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PromotionContainerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
