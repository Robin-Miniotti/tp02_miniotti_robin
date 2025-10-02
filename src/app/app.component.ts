import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollutionDeclarationFormComponent } from './pollution-declaration-form/pollution-declaration-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PollutionDeclarationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp2';
}
