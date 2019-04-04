import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{evento?.name}}</h2>
        <div>Date: {{evento?.date}}</div>
        <div [ngSwitch] = "evento?.time">
            Time: {{evento?.time}}
            <span *ngSwitchCase = "'8:00 AM'">(Early Start)</span>
            <span *ngSwitchCase = "'10:00 AM'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{evento?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{evento?.location.address}}</span>
            <span class="pad-left">{{evento?.location.city}}, {{evento?.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
    .thumbnail {
        min-height: 210px;
    }
    .well div {
        color: #bbb;
    }
    .pad-left {
        margin-left: 10px;
    }
    `]
})

export class EventsThumbnailComponent {
    @Input() evento:any
}