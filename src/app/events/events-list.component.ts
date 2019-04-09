import { Component, Input, OnInit } from "@angular/core";
import { EventService } from "./shared/events.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";

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
    eventlist:any
    constructor(private eventService:EventService, private toastrService:ToastrService, private route:ActivatedRoute) {
        
    }

    ngOnInit() {
        //this.eventlist = this.route.snapshot.data['events']
        this.eventService.getEvents().subscribe(events => this.eventlist = events)
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}