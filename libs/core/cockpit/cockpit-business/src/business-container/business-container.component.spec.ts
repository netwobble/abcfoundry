import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessContainerComponent } from './business-container.component';

describe('BusinessContainerComponent', () => {
  let component: BusinessContainerComponent;
  let fixture: ComponentFixture<BusinessContainerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BusinessContainerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
