import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ImageOverlayComponent } from '@modules/shared/ui/image-overlay';
import { AboutUsService } from './about-us.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'fm-about-us',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        ImageOverlayComponent,
        RouterModule,
    ],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AboutUsService],
})
export class AboutUsComponent {
    private _service = inject(AboutUsService);
    public leaders$ = this._service.getLeaders();
}
