import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class HelpdesksqlService {
  http: HttpClient = null;
  tickets = null;
  aTicket = {
    id: null,
    subj: '',
    complete: false,
    question: '',
    
  };
  theResponses = null;


  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }


  getTheTickets() {
    this.http.get<any>('db/gettickets').subscribe(result => {
      this.tickets = result;

    }, error => {
      console.log(error);
    });
  }

  getATicket(theId: number) {
    this.http.get<any>(`db/getticket/${theId}`).subscribe(result => {
      this.aTicket = result;


    }, error => {
      console.log(error);
    });
  }

  addBookmark(theId: number) {
    this.http.post<any>(`db/addbookmark/${theId}`, theId).subscribe(result => { },
      error => {
        console.log(error);
      });

  }

  getTheBookmarks() {
    this.http.get<any>('db/getbookmarks').subscribe(result => {
      this.tickets = result;

    }, error => {
      console.log(error);
    });
  }

  updateTheTicket(theTicket) {
    this.http.put<any>('db/updateaticket', theTicket).subscribe(result => {
      console.log(result);
    },
      error => {
        console.log(error);
      });
  }

  addTheTicket(theTicket) {

    this.http.put<any>('db/addaticket', theTicket).subscribe(result => {
      console.log(result);
    }, error => {
        console.log(error);
    });
  }

  addTheResponse(theResponse) {
    this.http.put<any>('db/addaresponse', theResponse).subscribe(result => {
      console.log(result);
    }, error => {
        console.log(error);
    });
  }

  getTheResponses(ticketId) {
    this.http.get<any>(`db/getresponses/${ticketId}`).subscribe(result => {
      console.log(ticketId);
      console.log(result);
      this.theResponses = result;
    }, error => {
      console.log(error);
    });

  }


}
