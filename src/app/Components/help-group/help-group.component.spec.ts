import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpGroupComponent } from './help-group.component';

describe('JobOffersComponent', () => {
  let component: HelpGroupComponent;
  let fixture: ComponentFixture<HelpGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
