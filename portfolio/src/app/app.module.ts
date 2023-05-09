import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AcercadeComponent,
        ExperienciaComponent,
        EducacionComponent,
        HomeComponent,
        LoginComponent,
        NewExperienciaComponent,
        EditExperienciaComponent,
        NeweducacionComponent,
        EditeducacionComponent,
        FooterComponent
    ],
    providers: [
      interceptorProvider
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BannerComponent,
        HttpClientModule,
        FormsModule,

    ]
})
export class AppModule { }
