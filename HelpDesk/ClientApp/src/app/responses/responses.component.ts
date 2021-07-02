import { Component, Input, OnInit} from '@angular/core';
import { HelpdesksqlService } from '../helpdesksql.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-responses',
    templateUrl: './responses.component.html',
    styleUrls: ['./responses.component.css']
})
/** responses component*/
export class ResponsesComponent implements OnInit{
/** responses ctor */


  
  @Input() tickId: number;
  @Input() test: any;


  helpdesksql: HelpdesksqlService = null;
  theRes = {
    ticket_id: 1,
    response: '',
    votes: 0,
  }




    constructor(theHelpdesksql: HelpdesksqlService) {
      this.helpdesksql = theHelpdesksql;
      console.log(this.test);
    //this.helpdesksql.getATicket(this.tickId);

      
    //  console.log(this.helpdesksql.aTicket.id);
    //  console.log(this.helpdesksql.aTicket);


    //console.log(this.tickId);

    //this.getAllResponses();


  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.helpdesksql.getATicket(this.tickId);
  }


  addResponse(aRes) {
    console.log("adding a response");
    console.log(this.helpdesksql.aTicket);
    this.helpdesksql.addTheResponse(aRes);
  }

  getAllResponses() {
    
    console.log("gettings all responses");
    console.log(this.tickId);
    this.helpdesksql.getTheResponses(this.tickId);
  }

}
