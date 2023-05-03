import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { LoginComponent } from "./componentes/login/login.component";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './login2/login2.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AcercadeComponent,
        ExperienciaComponent,
        EducacionComponent,
        HomeComponent,
        Login2Component,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginComponent,
        BannerComponent,
        HttpClientModule
    ]
})
export class AppModule { }
