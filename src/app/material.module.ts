import { MatTabsModule, MatSidenavModule, MatMenuModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule
  ],
  declarations: [LayoutComponent]
})

export class MaterialModule {}
