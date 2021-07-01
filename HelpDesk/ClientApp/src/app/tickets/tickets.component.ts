import { Component } from '@angular/core';
import { HelpdesksqlService } from '../helpdesksql.service';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.css']
})
/** tickets component*/
export class TicketsComponent {
  sh = false;

  helpdesksql: HelpdesksqlService = null;
    /** tickets ctor */
    constructor(theHelpdesksql: HelpdesksqlService) {
      this.helpdesksql = theHelpdesksql;
      this.helpdesksql.getTheTickets();
  }


  reloadTickets() {
    this.helpdesksql.getTheTickets();
  }

  showAdd() {
    this.reloadTickets();
    if (this.sh) {
      this.sh = false;
      return;
    }
    this.sh = true;
  }

}
