import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'fm-about-us',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {}
