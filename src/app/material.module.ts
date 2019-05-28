import { MatTabsModule, MatSidenavModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
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
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [LayoutComponent]
})

export class MaterialModule {}
