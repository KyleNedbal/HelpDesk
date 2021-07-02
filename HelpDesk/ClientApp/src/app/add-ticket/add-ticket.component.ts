import { Component, Output, EventEmitter } from '@angular/core';

import { HelpdesksqlService } from '../helpdesksql.service';

@Component({
    selector: 'app-add-ticket',
    templateUrl: './add-ticket.component.html',
    styleUrls: ['./add-ticket.component.css']
})
/** add-ticket component*/
export class AddTicketComponent {

  helpdesksql: HelpdesksqlService = null;
  newTicket = {
    subj: '',
    complete: false,
    question: '',

  };

  @Output() hideAdd: EventEmitter<any> = new EventEmitter<any>();

/** add-ticket ctor */
    constructor(theHelpdesksql: HelpdesksqlService) {
      this.helpdesksql = theHelpdesksql;
  }


  addTicket(aNewTicket) {
    debugger;
    this.helpdesksql.addTheTicket(aNewTicket);
    this.hideTheAdd();
  }

  hideTheAdd() {
    this.hideAdd.emit(null);
  }

}
