import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleElementComponent } from './sample-element.component';

describe('SampleElementComponent', () => {
  let component: SampleElementComponent;
  let fixture: ComponentFixture<SampleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
