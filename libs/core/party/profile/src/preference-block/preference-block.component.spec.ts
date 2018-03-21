import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceBlockComponent } from './preference-block.component';

describe('PreferenceBlockComponent', () => {
  let component: PreferenceBlockComponent;
  let fixture: ComponentFixture<PreferenceBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
