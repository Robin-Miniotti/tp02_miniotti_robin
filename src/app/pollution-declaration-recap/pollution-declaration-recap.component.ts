import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pollution-declaration-recap',
  imports: [],
  templateUrl: './pollution-declaration-recap.component.html',
  styleUrl: './pollution-declaration-recap.component.css'
})
export class PollutionDeclarationRecapComponent {
  @Input() title: string = "";
  @Input() pollutionType: string = "";
  @Input() description: string = "";
  @Input() observationDate: Date = new Date();
  @Input() location: string = "";
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  @Input() photoUrl: string = "";
}
