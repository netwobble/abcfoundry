import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyBlockComponent } from './strategy-block.component';

describe('StrategyBlockComponent', () => {
  let component: StrategyBlockComponent;
  let fixture: ComponentFixture<StrategyBlockComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StrategyBlockComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
