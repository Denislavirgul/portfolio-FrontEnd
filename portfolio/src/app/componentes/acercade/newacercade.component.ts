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






// import { Component, OnInit } from '@angular/core';
// //import { PersonaService } from '../services/persona.service';
// import { PersonaService } from 'src/app/service/persona.service';
// //import { Persona } from '../model/persona.model';
// import { persona } from 'src/app/model/persona.model';
// import { Router } from '@angular/router';
// import { ImageService } from 'src/app/service/image.service';
// import { finalize } from 'rxjs';


// @Component({
//   selector: 'app-newacercade',
//   templateUrl: './newacercade.component.html',
//   styleUrls: ['./newacercade.component.css']
// })
// export class NewAcercadeComponent implements OnInit {
//   persona: persona = new persona('', '', '', '');
//   storage: any;

//   constructor(private personaService: PersonaService,
//               private router: Router,
//               public imageService: ImageService) { }

//   ngOnInit(): void {
//   }

//   onCreate(): void {
//     this.personaService.save(this.persona)
//       .subscribe(data => {
//         console.log(data);
//         this.router.navigate(['/acercade']);
//       }, error => {
//         console.log(error);
//       });
//   }

//   uploadImage(event: any) {
//     const file = event.target.files[0];
//     const filePath = `images/${file.name}`;
//     const fileRef = this.storage.ref(filePath);
//     const task = this.storage.upload(filePath, file);

//     return new Promise<void>((resolve, reject) => {
//       task.snapshotChanges().pipe(
//         finalize(() => {
//           fileRef.getDownloadURL().subscribe((url: string) => {
//             this.imageService.url = url;
//             this.persona.img = url;
//             resolve();
//           });
//         })
//       ).subscribe();
//     });
//   }

// }
