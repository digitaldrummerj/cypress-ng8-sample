import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatList, MatListItem, MatListOption } from '@angular/material/list';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper, MatStep, MatHorizontalStepper } from '@angular/material/stepper';
import { MatTooltip } from '@angular/material/tooltip';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cypress-ng8-sample';
}
