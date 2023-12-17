import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { asyncScheduler, filter, map, observeOn } from 'rxjs';

@Component({
    selector: 'fm-single-breadcrumb',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './single-breadcrumb.component.html',
    styleUrl: './single-breadcrumb.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleBreadcrumbComponent {
    private _router = inject(Router);
    private _title = inject(Title);

    public title = toSignal(
        this._router.events.pipe(
            observeOn(asyncScheduler),
            filter((event) => event instanceof NavigationEnd),
            map(() => this._title.getTitle()),
        ),
    );
}
