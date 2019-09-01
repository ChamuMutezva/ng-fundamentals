import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
//import { template } from '@angular/core/src/render3';

@Component({
  selector: "event-thumbnail",
  template: `
    <div class="container">
      <div class="myEvents">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div [ngSwitch]="event?.time">Time: {{ event?.time }}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{ event.price }}</div>
        <div *ngIf="event?.location">
          <span>Location: {{ event?.location?.address }}</span>
          <span class="pad-left"
            >{{ event?.location?.city }}, {{ event?.location?.country }}</span
          >
        </div>
        <div *ngIf="event?.onlineUrl">online URL: {{ event?.onlineUrl }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .myEvents div {
        color: #bbb;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;
}
