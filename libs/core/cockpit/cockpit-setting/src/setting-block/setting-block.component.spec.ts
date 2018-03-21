import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBlockComponent } from './setting-block.component';

describe('SettingBlockComponent', () => {
  let component: SettingBlockComponent;
  let fixture: ComponentFixture<SettingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
