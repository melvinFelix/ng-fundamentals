import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{evento.name}}</h2>
        <div>Date: {{evento.date}}</div>
        <div>Time: {{evento.time}}</div>
        <div>Price: \${{evento.price}}</div>
        <div>
            <span>Location: {{evento.location.address}}</span>
            <span class="pad-left">{{evento.location.city}}, {{evento.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
    .pad-left {
        margin-left: 10px;
    }
    `]
})

export class EventsThumbnailComponent {
    @Input() evento:any

    someValue:any = 'some value'
    logfoo() {
        console.log('foo');
    }


}