import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
declare let toastr;

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class EventsListComponent implements OnInit {
  events: any[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(
    private eventService: EventService,
    // tslint:disable-next-line:no-shadowed-variable
    private toastr: ToastrService
  ) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
