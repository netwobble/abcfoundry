import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureMainComponent } from './structure-main.component';

describe('StructureMainComponent', () => {
  let component: StructureMainComponent;
  let fixture: ComponentFixture<StructureMainComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StructureMainComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
