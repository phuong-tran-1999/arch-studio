import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@module/shared/layout/footer';
import { HeaderComponent } from '@module/shared/layout/header';
import { register } from 'swiper/element/bundle';

@Component({
    standalone: true,
    imports: [RouterModule, FooterComponent, HeaderComponent],
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
