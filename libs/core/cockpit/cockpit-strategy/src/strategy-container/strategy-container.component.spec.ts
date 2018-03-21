import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyContainerComponent } from './strategy-container.component';

describe('StrategyContainerComponent', () => {
  let component: StrategyContainerComponent;
  let fixture: ComponentFixture<StrategyContainerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StrategyContainerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
