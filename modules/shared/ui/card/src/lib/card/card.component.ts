import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '@modules/shared/data-access';

@Component({
    selector: 'fm-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input({ required: true }) cardData!: Card;
    @Input() hasCounter: boolean = false;
}
