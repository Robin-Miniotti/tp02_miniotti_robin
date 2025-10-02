import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PollutionDeclarationRecapComponent } from "../pollution-declaration-recap/pollution-declaration-recap.component";

@Component({
  selector: 'app-pollution-declaration-form',
  imports: [FormsModule, PollutionDeclarationRecapComponent],
  templateUrl: './pollution-declaration-form.component.html',
  styleUrl: './pollution-declaration-form.component.css'
})
export class PollutionDeclarationFormComponent {

  title:string="";
  pollutionType:string="";
  description:string="";
  observationDate:Date=new Date();
  location:string="";
  latitude:number=0;
  longitude:number=0;
  photoUrl:string="";

  subbitted: boolean = false;

  onlyDigits(event: KeyboardEvent) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  confirm(){
    // console.log("Titre : ", this.title);
    // console.log("Type de pollution : ", this.pollutionType);
    // console.log("Description : ", this.description);
    // console.log("Date de l'observation : ", this.observationDate);
    // console.log("Lieu de l'observation : ", this.location);
    // console.log("Latitude : ", this.latitude);
    // console.log("Longitude : ", this.longitude);
    // console.log("Photo URL : ", this.photoUrl);

    if(this.title && this.pollutionType && this.description && this.location && this.latitude && this.longitude){   
      alert("Déclaration soumise avec succès !");
      this.subbitted = true;
    }
    else{
      alert("Veuillez remplir tous les champs obligatoires.");
    }    
  }
}
