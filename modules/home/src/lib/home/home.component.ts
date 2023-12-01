import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
    CUSTOM_ELEMENTS_SCHEMA,
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroSlide } from '@modules/shared/data-access';
import { SwiperDirective } from '@modules/shared/directives/swiper';
import { CardComponent } from '@modules/shared/ui/card';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'fm-home',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        SwiperDirective,
        CardComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
    private _httpService = inject(HttpClient);

    public config: SwiperOptions = {
        navigation: false,
        pagination: false,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
    };

    public slides = this._httpService.get<HeroSlide[]>(
        '/assets/data/hero-slide.json'
    );

    public heroImage2 = 'url(/assets/images/home-2.webp)';
}
