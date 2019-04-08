import { Component, Input, OnInit } from "@angular/core";
import { EventService } from "./shared/events.service";
import { ToastrService } from "../common/toastr.service";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1> Upcoming Green Star Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let events of eventlist" class="col-md-5">
                <event-thumbnail [evento]="events"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    eventlist:any[]
    constructor(private eventService:EventService, private toastrService:ToastrService) {
        
    }

    ngOnInit() {
        this.eventlist = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}