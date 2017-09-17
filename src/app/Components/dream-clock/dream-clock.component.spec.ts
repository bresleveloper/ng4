import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamClockComponent } from './dream-clock.component';

describe('DreamClockComponent', () => {
  let component: DreamClockComponent;
  let fixture: ComponentFixture<DreamClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
