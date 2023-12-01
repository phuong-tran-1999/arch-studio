import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
    CUSTOM_ELEMENTS_SCHEMA,
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import { HeroSlide } from '@modules/shared/data-access';
import { SwiperDirective } from '@modules/shared/directives/swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'fm-home',
    standalone: true,
    imports: [CommonModule, SwiperDirective, HttpClientModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
    private _httpService = inject(HttpClient);

    public config: SwiperOptions = {
        // modules: [Navigation, Pagination, A11y, Mousewheel],
        // modules: [Navigation],
        // autoHeight: true,
        // spaceBetween: 20,
        navigation: false,
        pagination: false,
        slidesPerView: 1,
        centeredSlides: true,
        // breakpoints: {
        //     400: {
        //         slidesPerView: 'auto',
        //         centeredSlides: false,
        //     },
        // },
    };

    public slides = this._httpService.get<HeroSlide[]>(
        '/assets/data/hero-slide.json'
    );
}
