import { HttpClientModule } from '@angular/common/http';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@module/shared/layout/footer';
import { HeaderComponent } from '@module/shared/layout/header';
import { SingleBreadcrumbComponent } from '@modules/shared/ui/single-breadcrumb';
import { SkeletonComponent } from '@modules/shared/ui/skeleton';
import { register } from 'swiper/element/bundle';

@Component({
    standalone: true,
    imports: [
        RouterModule,
        FooterComponent,
        HeaderComponent,
        HttpClientModule,
        SkeletonComponent,
        SingleBreadcrumbComponent,
    ],
    selector: 'arch-studio-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        register();
    }
}
