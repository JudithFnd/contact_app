import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule]; // creates a constant to pass the modules to import and not to have to add the whole list directly in import

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/">
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>

      <a mat-button routerLink="/contacts">
        <mat-icon>list_alt</mat-icon>
        <span>Contacts</span>
      </a>

      <span class="spacer"></span>
      <a mat-button>
        <mat-icon>add_box</mat-icon>
        <span>New contact</span>
      </a>
    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {

}
