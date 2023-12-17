import { CommonModule, ViewportScroller } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import { CardComponent } from '@modules/shared/ui/card';
import { SkeletonComponent } from '@modules/shared/ui/skeleton';
import { PortfolioService } from './portfolio.service';

@Component({
    selector: 'fm-home',
    standalone: true,
    imports: [CommonModule, CardComponent, SkeletonComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PortfolioService],
})
export class PortfolioComponent implements AfterViewInit {
    private _service = inject(PortfolioService);
    private _viewportScroller = inject(ViewportScroller);

    public projects$ = this._service.getAllProjects();

    ngAfterViewInit(): void {
        this._viewportScroller.scrollToPosition([0, 0]);
    }
}
