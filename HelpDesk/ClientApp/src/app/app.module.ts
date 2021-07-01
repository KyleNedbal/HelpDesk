import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HelpdesksqlService } from './helpdesksql.service';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TicketsComponent,
    TicketDetailsComponent,
    BookmarksComponent,
    AddTicketComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'ticketdetails/:id', component: TicketDetailsComponent },
      { path: 'bookmarks', component: BookmarksComponent },
      { path: 'addticket', component: AddTicketComponent},
    ])
  ],
  providers: [HelpdesksqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
