import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  addDays,
  addHours,
  endOfDay,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfDay,
  subDays
} from 'date-fns';

import { Colors } from '../../../constants/colors.service';
import { Subject } from 'rxjs';

const colors: any = {
  color1: {
    primary: Colors.getColors().themeColor1,
    secondary: Colors.getColors().themeColor1_10
  },
  color2: {
    primary: Colors.getColors().themeColor2,
    secondary: Colors.getColors().themeColor2_10
  },
  color3: {
    primary: Colors.getColors().themeColor3,
    secondary: Colors.getColors().themeColor3_10
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'
})

export class CalendarComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  modalRef: BsModalRef;
  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Hotel reservation',
      color: colors.color1,
      allDay: true,
      // tslint:disable-next-line: max-line-length
      meta: 'Hotel Reservations will starts the following date. Please dont forget fill reservation date.'
    },
    {
      start: startOfDay(new Date()),
      title: 'Meal reservation',
      color: colors.color2,
      // tslint:disable-next-line: max-line-length
      meta: 'Meal Reservations will starts the following date. Please dont forget fill reservation date.'
    },
    {
      start: subDays(endOfMonth(new Date()),3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Persons adding',
      color: colors.color3,
      allDay: true,
      // tslint:disable-next-line: max-line-length
      meta: 'Please add persons the following date.'
    }
  ];

  constructor(private modal: BsModalService) { }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modalRef = this.modal.show(this.modalContent);
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

}
