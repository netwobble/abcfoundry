import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBlockComponent } from './business-block.component';

describe('BusinessBlockComponent', () => {
  let component: BusinessBlockComponent;
  let fixture: ComponentFixture<BusinessBlockComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BusinessBlockComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
