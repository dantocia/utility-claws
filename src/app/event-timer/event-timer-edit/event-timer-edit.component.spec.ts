import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTimerEditComponent } from './event-timer-edit.component';

describe('EventTimerEditComponent', () => {
  let component: EventTimerEditComponent;
  let fixture: ComponentFixture<EventTimerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTimerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTimerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
