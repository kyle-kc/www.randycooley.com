import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../projects/project-service'
import { Modal } from 'bootstrap';


@Component({
    templateUrl: './project.component.html',
})
export class ProjectComponent {
    @ViewChild('modalElement') modalElement!: ElementRef;

    selectedImage: any
    readonly project: any

    constructor(private route: ActivatedRoute, private router: Router) {
        const projectId = route.snapshot.paramMap.get("projectId")
        this.project = ProjectService.projects.find(project => project._id == projectId)

        if (!this.project) {
            router.navigate(['/404']);
        }
    }

    openModal(image: any): void {
        this.selectedImage = image
        const modal = new Modal(this.modalElement.nativeElement);
        modal.show();
    }
}