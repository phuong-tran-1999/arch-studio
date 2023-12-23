import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeDirection } from './image-overlay.type';

@Component({
    selector: 'fm-image-overlay',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './image-overlay.component.html',
    styleUrl: './image-overlay.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageOverlayComponent {
    @Input() direction: FadeDirection = 'bottom';
    @Input({ required: true }) imageURL: string = '';
}
