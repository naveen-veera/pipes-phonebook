import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhonePipe } from '../phone.pipe';

import { PhoneComponent } from './phone.component';

describe('PhoneComponent', () => {
  let component: PhoneComponent;
  let fixture: ComponentFixture<PhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneComponent ],
      providers:[PhonePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('test_case2', () => {
    expect(component).toBeTruthy();
  });

  it('test_case3', () => {
    component.code = '+91';
    component.number = 7598435213;
    component.get();
    expect(component.result).toBe("+91-7598435213");
  });

  it('test_case4', () => {
    component.code = '+60';
    component.number = 437654321;
    component.get();
    expect(component.result).toBe("+60-437654321");
  });

  it('test_case5', () => {
    component.code = '+231';
    component.number = 4567890;
    component.get();
    expect(component.result).toBe("+231-4567890");
  });

});
