import { Component, Input } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1> Upcoming Green Star Events</h1>
        <hr>
        <div class="well hoverwell">Hello, World!</div>
        <event-thumbnail #thumbnail [evento]="event1"></event-thumbnail>
        <h3>{{thumbnail.someValue}}</h3>
        <button class="btn btn-primary" (click)="thumbnail.logfoo()">log me some foo</button>
    </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Greener Connect',
        date: '09/26/2036',
        time: '10:00 AM',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1022 Anfield Road',
            city: 'Liverpool',
            country: 'England'
        }
    }
}