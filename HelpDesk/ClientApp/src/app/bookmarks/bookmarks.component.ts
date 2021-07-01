import { Component } from '@angular/core';
import { HelpdesksqlService } from '../helpdesksql.service';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.css']
})
/** bookmarks component*/
export class BookmarksComponent {

  helpdesksql: HelpdesksqlService = null;

    /** bookmarks ctor */
  constructor(theHelpdesksql: HelpdesksqlService) {
    this.helpdesksql = theHelpdesksql;
    this.helpdesksql.getTheBookmarks();
  }


}
