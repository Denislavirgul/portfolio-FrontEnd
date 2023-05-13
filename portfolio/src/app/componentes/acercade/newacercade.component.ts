
import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-newacercade',
  templateUrl: './newacercade.component.html',
  styleUrls: ['./newacercade.component.css']
})

export class NewAcercadeComponent {
  persona: persona = new persona('', '', '', '');

  constructor(
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService
  ) {}

  onCreate(): void {
    this.persona.img = this.imageService.url;
    this.personaService.save(this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar la persona");
      }
    );
  }

  uploadImage($event: any) {
    const name = "perfil_nuevo";
    this.imageService.uploadImage($event, name);
  }
}
