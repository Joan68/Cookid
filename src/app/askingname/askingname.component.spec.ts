import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskingnameComponent } from './askingname.component';

describe('AskingnameComponent', () => {
  let component: AskingnameComponent;
  let fixture: ComponentFixture<AskingnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskingnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskingnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
