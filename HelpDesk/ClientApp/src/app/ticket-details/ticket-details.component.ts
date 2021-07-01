import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelpdesksqlService } from '../helpdesksql.service';


@Component({
    selector: 'app-ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.component.css']
})
/** TicketDetails component*/
export class TicketDetailsComponent implements OnInit{
  id = null;
  helpdesksql: HelpdesksqlService = null;
  sh = false;


    /** TicketDetails ctor */
    constructor(private route: ActivatedRoute, theHelpdesksql: HelpdesksqlService) {
      this.helpdesksql = theHelpdesksql;
     
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.helpdesksql.getATicket(this.id);
  }

  addBookmark() {
    this.helpdesksql.addBookmark(this.id);
  }

  showEdit() {
    if (this.sh) {
      this.sh = false;
      return;
    }
    this.sh = true;
    
  }

  updateTicket(theTicket) {
    this.sh = false;
    this.helpdesksql.updateTheTicket(theTicket);
  }

}
