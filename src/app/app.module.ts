import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/events-details/events-details.component';
import { appRoutes } from './routes';
import { provideForRootGuard } from '@angular/router/src/router_module';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';

@NgModule({
  imports: [BrowserModule,
RouterModule.forRoot(appRoutes)
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    
  ],
providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
