import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqeareComponent } from './sqeare.component';

describe('SqeareComponent', () => {
  let component: SqeareComponent;
  let fixture: ComponentFixture<SqeareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqeareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqeareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
