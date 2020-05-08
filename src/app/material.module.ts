import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule
  ],
  declarations: [LayoutComponent]
})

export class MaterialModule {}
