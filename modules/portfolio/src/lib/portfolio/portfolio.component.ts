import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent } from '@modules/shared/ui/card';
import { SkeletonComponent } from '@modules/shared/ui/skeleton';
import { FortfolioService } from './portfolio.service';

@Component({
    selector: 'fm-home',
    standalone: true,
    imports: [CommonModule, CardComponent, SkeletonComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FortfolioService],
})
export class PortfolioComponent {
    private _service = inject(FortfolioService);

    public projects$ = this._service.getAllProjects();
}
