import { Routes } from "@angular/router";
import { Error404Component } from "./app/errors/404.component";

import { 
    EventsListComponent,
    EventsThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolve
   } from "./app/events/index";

export const appRoutes:Routes =  [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolve}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]