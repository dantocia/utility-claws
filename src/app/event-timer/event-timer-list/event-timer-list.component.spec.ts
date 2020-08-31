import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTimerListComponent } from './event-timer-list.component';

describe('EventTimerListComponent', () => {
  let component: EventTimerListComponent;
  let fixture: ComponentFixture<EventTimerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTimerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTimerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
