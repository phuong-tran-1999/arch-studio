import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Injector,
    Input,
    OnInit,
    Signal,
    computed,
    inject,
    runInInjectionContext,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormControlStatus } from '@angular/forms';
import { ErrorMessage } from '@modules/shared/data-access';
import { ErrorDisplayMode } from './form-error-message.type';

@Component({
    selector: 'fm-form-error-message',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './form-error-message.component.html',
    styleUrl: './form-error-message.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorMessageComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) errorList!: ErrorMessage;
    @Input() mode: ErrorDisplayMode = 'single';

    injector = inject(Injector);

    errors!: Signal<string[]>;
    statusStream!: Signal<FormControlStatus>;

    ngOnInit(): void {
        // Will change in v18, signal based input
        runInInjectionContext(this.injector, () => {
            console.log('this.control', this.control);
            this.statusStream = toSignal(this.control.statusChanges, {
                initialValue: this.control.status,
            });

            this.errors = computed(() => {
                console.log(
                    'status change',
                    this.statusStream(),
                    this.control.touched,
                );

                if (this.statusStream() !== 'INVALID' || !this.control.touched)
                    return [];

                return this.collectErrors(this.control);
            });
        });
    }

    collectErrors(control: FormControl): string[] {
        const errorObj = control.errors;
        if (!errorObj) return [];

        const errorKeys = Object.keys(control.errors);
        if (errorKeys.length < 1) return [];

        return errorKeys.map((key) => this.errorList[key]);
    }
}
