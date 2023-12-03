import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'fm-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
