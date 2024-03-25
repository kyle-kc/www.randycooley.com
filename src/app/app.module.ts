import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectOverviewComponent } from './projects/project-overview.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { ProjectComponent } from './project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialComponent } from './testimonials/testimonial.component'
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        ProjectsComponent,
        ProjectOverviewComponent,
        ProjectComponent,
        TestimonialsComponent,
        TestimonialComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        NgxMasonryModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }