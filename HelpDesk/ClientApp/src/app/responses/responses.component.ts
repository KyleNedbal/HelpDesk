import { Component, Input, OnInit} from '@angular/core';
import { HelpdesksqlService } from '../helpdesksql.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-responses',
    templateUrl: './responses.component.html',
    styleUrls: ['./responses.component.css']
})
/** responses component*/
export class ResponsesComponent implements OnInit{
/** responses ctor */

/*  tickId: number;*/
  
  @Input() tickId: number;
  //@Input() test: any;




  helpdesksql: HelpdesksqlService = null;
  theRes = {
    ticket_id: null,
    response: '',
    votes: 0,
  }




    constructor(private route: ActivatedRoute, theHelpdesksql: HelpdesksqlService) {
      this.helpdesksql = theHelpdesksql;
  
      debugger;

      
    //this.helpdesksql.getATicket(this.tickId);

      
    //  console.log(this.helpdesksql.aTicket.id);
    //  console.log(this.helpdesksql.aTicket);


    //console.log(this.tickId);


  }

  ngOnInit() {
    
    /*    this.tickId = this.route.snapshot.params['id'];*/
    debugger;


    this.helpdesksql.theResponses = null;
    this.getAllResponses();
  }

  ngOnChanges() {
    
  }


  addResponse(aRes) {


    this.helpdesksql.addTheResponse(aRes);
  }

  getAllResponses() {
    debugger;


    this.helpdesksql.getTheResponses(this.tickId);
  }

}
