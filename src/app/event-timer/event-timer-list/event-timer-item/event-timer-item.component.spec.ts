import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTimerItemComponent } from './event-timer-item.component';

describe('EventTimerItemComponent', () => {
  let component: EventTimerItemComponent;
  let fixture: ComponentFixture<EventTimerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTimerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTimerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
