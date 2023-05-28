import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CalendarModule} from '@syncfusion/ej2-angular-calendars';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    exports: [
        MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatButtonModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSelectModule,
        CalendarModule,
        MatCheckboxModule
    ]
})
export class MaterialModule { }
