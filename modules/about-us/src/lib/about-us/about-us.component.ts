import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsService } from './about-us.service';

@Component({
    selector: 'fm-about-us',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AboutUsService],
})
export class AboutUsComponent {
    private _service = inject(AboutUsService);
    public leaders$ = this._service.getLeaders();
}
