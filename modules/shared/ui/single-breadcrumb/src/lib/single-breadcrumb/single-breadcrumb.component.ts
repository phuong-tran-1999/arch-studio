import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'fm-single-breadcrumb',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './single-breadcrumb.component.html',
    styleUrl: './single-breadcrumb.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleBreadcrumbComponent {}
