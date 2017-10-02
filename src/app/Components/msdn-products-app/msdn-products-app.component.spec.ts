import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdnProductsAppComponent } from './msdn-products-app.component';

describe('MsdnProductsAppComponent', () => {
  let component: MsdnProductsAppComponent;
  let fixture: ComponentFixture<MsdnProductsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdnProductsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdnProductsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
