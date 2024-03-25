import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectComponent } from './project/project.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { TestimonialsComponent } from './testimonials/testimonials.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:projectId', component: ProjectComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }