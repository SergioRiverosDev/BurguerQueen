import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ProductsExtraBlocks } from '../../../models/product.model';
import { TranslateModule } from '@ngx-translate/core';
import { ExtraSelectedPipe } from '../../../pipes/extra-selected-pipe';

@Component({
  selector: 'app-dialog-extras',
  imports: [TranslateModule, MatDialogModule, ExtraSelectedPipe],
  templateUrl: './dialog-extras.html',
  styleUrl: './dialog-extras.css',
})
export class DialogExtras {

  private dataDialog = inject(MAT_DIALOG_DATA);
  public extraBlocks:ProductsExtraBlocks[]= this.dataDialog['extraBlocks']

}
