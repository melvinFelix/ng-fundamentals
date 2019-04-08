import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EventService } from "../shared/events.service";

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
    .container {
        padding-left:20px; padding-right:20px
    }

    .event-image {
        height: 100px;
    }
    `]
})

export class EventDetailsComponent implements OnInit {
    event:any

    constructor(
        private eventsService:EventService,
        private activatedRoute:ActivatedRoute
    ) {}

    ngOnInit() {
        this.event = this.eventsService.getEvent(+this.activatedRoute.snapshot.params['id'])
    }
}