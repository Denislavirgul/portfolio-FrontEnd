import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit{
  persona:persona = null;


  constructor(private activatedRouter: ActivatedRoute,
    private personaService:PersonaService,
    private router:Router,
    public imageService:ImageService){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=>{
        this.persona = data;
      },err=>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }



  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data=>{
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }


  uploadImage($event:any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event,name)
  }

}



// onUpdate():void{
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   if (this.persona) {
  //     this.persona.img = this.imageService.url
  //     this.personaService.update(id, this.persona).subscribe(
  //       data=>{
  //         this.router.navigate(['']);
  //       },err =>{
  //         alert("Error al modificar la persona");
  //         this.router.navigate(['']);
  //       }
  //     )
  //   }
  // }


// uploadImage($event:any){
  //   const id= this.activatedRouter.snapshot.params['id'];
  //   const name = "perfil_" + id;

  //   this.imageService.uploadImage($event,name);
  // ($event.target as HTMLInputElement).value = '';

  //   const file = $event.target.files[0];
  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);

  //   reader.onload = () => {
  //     this.imageService.url = reader.result as string;
  //     this.persona.img = this.imageService.url;
  //     this.imageService.uploadImage($event,name);
  //   }
  // }
