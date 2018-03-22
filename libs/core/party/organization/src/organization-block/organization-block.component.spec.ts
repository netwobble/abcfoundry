import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationBlockComponent } from './organization-block.component';

describe('OrganizationBlockComponent', () => {
  let component: OrganizationBlockComponent;
  let fixture: ComponentFixture<OrganizationBlockComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OrganizationBlockComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
