import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-dialog-ticket',
  imports: [TranslateModule, MatDialogModule, MatAnchor],
  templateUrl: './dialog-ticket.html',
  styleUrl: './dialog-ticket.css',
})
export class DialogTicket {

  private dataDialog = inject(MAT_DIALOG_DATA);
  public ticket:number= this.dataDialog['ticket']

}
