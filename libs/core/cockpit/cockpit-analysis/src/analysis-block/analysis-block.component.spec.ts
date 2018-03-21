import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisBlockComponent } from './analysis-block.component';

describe('AnalysisBlockComponent', () => {
  let component: AnalysisBlockComponent;
  let fixture: ComponentFixture<AnalysisBlockComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AnalysisBlockComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
