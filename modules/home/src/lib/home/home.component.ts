import { CommonModule } from '@angular/common';
import {
    CUSTOM_ELEMENTS_SCHEMA,
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperDirective } from '@modules/shared/directives/swiper';
import { CardComponent } from '@modules/shared/ui/card';
import { SkeletonComponent } from '@modules/shared/ui/skeleton';
import { SwiperOptions } from 'swiper/types';
import { HomeService } from './home.service';

@Component({
    selector: 'fm-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        SwiperDirective,
        CardComponent,
        SkeletonComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [HomeService],
})
export class HomeComponent {
    private _service = inject(HomeService);

    public config: SwiperOptions = {
        navigation: false,
        pagination: false,
        slidesPerView: 1,
        centeredSlides: true,
        // loop: true,
    };
    public heroImage2 = 'url(/assets/images/home-2.webp)';

    public slides$ = this._service.getHeroSlide();
    public previewFeatured$ = this._service.getPreviewFeatured();
}
