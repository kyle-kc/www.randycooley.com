import { Component, Input } from '@angular/core';

@Component({
    selector: 'project-overview',
    templateUrl: './project-overview.component.html',
})
export class ProjectOverviewComponent {
    @Input() project: any;
}