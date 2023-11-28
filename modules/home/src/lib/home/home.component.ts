import {
    CUSTOM_ELEMENTS_SCHEMA,
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperDirective } from '@modules/shared/directives/swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'fm-home',
    standalone: true,
    imports: [CommonModule, SwiperDirective],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
    public config: SwiperOptions = {
        // modules: [Navigation, Pagination, A11y, Mousewheel],
        // modules: [Navigation],
        autoHeight: true,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true, dynamicBullets: true },
        slidesPerView: 1,
        centeredSlides: true,
        breakpoints: {
            400: {
                slidesPerView: 'auto',
                centeredSlides: false,
            },
        },
    };
}
