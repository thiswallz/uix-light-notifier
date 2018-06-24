import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UixLightNotifierComponent } from './uix-light-notifier.component';

describe('UixLightNotifierComponent', () => {
  let component: UixLightNotifierComponent;
  let fixture: ComponentFixture<UixLightNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UixLightNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UixLightNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
