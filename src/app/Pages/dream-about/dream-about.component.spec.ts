import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamAboutComponent } from './dream-about.component';

describe('DreamAboutComponent', () => {
  let component: DreamAboutComponent;
  let fixture: ComponentFixture<DreamAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
