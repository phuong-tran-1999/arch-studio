import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@module/shared/layout/footer';
import { HeaderComponent } from '@module/shared/layout/header';

@Component({
    standalone: true,
    imports: [RouterModule, FooterComponent, HeaderComponent],
    selector: 'arch-studio-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
