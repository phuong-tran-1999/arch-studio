import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    inject,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperContainer } from 'swiper/element';

@Directive({
    selector: '[fmSwiper]',
    standalone: true,
})
export class SwiperDirective implements AfterViewInit {
    @Input() swiperConfig?: SwiperOptions;

    private _el = inject(ElementRef<SwiperContainer>);

    ngAfterViewInit(): void {
        Object.assign(this._el.nativeElement, this.swiperConfig);
        this._el.nativeElement.initialize();
    }
}
