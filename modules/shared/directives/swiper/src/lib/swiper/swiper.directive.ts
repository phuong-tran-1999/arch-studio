import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEventPattern, map, startWith } from 'rxjs';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Directive({
    selector: '[fmSwiper]',
    standalone: true,
    exportAs: 'fm-swiper',
})
export class SwiperDirective implements AfterViewInit {
    @Input() swiperConfig?: SwiperOptions;

    private _el: ElementRef<SwiperContainer> = inject(
        ElementRef<SwiperContainer>,
    );

    public indexChanges$ = fromEventPattern(
        (handler) =>
            this._el.nativeElement.addEventListener(
                'swiperactiveindexchange',
                handler,
            ),
        (handler) =>
            this._el.nativeElement.removeEventListener(
                'swiperactiveindexchange',
                handler,
            ),
    ).pipe(
        map(() => this._el.nativeElement.swiper.activeIndex),
        startWith(0),
        takeUntilDestroyed(),
    );

    ngAfterViewInit(): void {
        Object.assign(this._el.nativeElement, this.swiperConfig);
        this._el.nativeElement.initialize();
        this.indexChanges$.subscribe();
    }

    toSlide(index: number) {
        this._el.nativeElement.swiper.slideTo(index);
    }
}
