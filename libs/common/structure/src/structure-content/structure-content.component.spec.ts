import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureContentComponent } from './structure-content.component';

describe('StructureContentComponent', () => {
  let component: StructureContentComponent;
  let fixture: ComponentFixture<StructureContentComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StructureContentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
