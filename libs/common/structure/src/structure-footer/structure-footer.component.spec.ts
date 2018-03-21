import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFooterComponent } from './structure-footer.component';

describe('StructureFooterComponent', () => {
  let component: StructureFooterComponent;
  let fixture: ComponentFixture<StructureFooterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StructureFooterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
