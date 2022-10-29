import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeregeComponent } from './employerege.component';

describe('EmployeregeComponent', () => {
  let component: EmployeregeComponent;
  let fixture: ComponentFixture<EmployeregeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeregeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeregeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
