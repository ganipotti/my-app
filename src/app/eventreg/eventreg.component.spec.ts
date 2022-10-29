import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregComponent } from './eventreg.component';

describe('EventregComponent', () => {
  let component: EventregComponent;
  let fixture: ComponentFixture<EventregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
