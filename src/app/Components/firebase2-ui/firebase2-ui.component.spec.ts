import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firebase2UiComponent } from './firebase2-ui.component';

describe('Firebase2UiComponent', () => {
  let component: Firebase2UiComponent;
  let fixture: ComponentFixture<Firebase2UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firebase2UiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firebase2UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
