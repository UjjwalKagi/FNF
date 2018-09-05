import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercontrollerComponent } from './customercontroller.component';

describe('CustomercontrollerComponent', () => {
  let component: CustomercontrollerComponent;
  let fixture: ComponentFixture<CustomercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
