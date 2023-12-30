import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessage } from '@modules/shared/data-access';
import {
    Observable,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    map,
    startWith,
} from 'rxjs';
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

    // It's so weird, Angular Form Control doesn't get multiple error anymore!
    @Input() mode: ErrorDisplayMode = 'single';

    messages$!: Observable<string[]>;

    ngOnInit(): void {
        this.messages$ = combineLatest([
            this.control.statusChanges.pipe(startWith(this.control.status)),
            this.control.valueChanges.pipe(
                debounceTime(300),
                distinctUntilChanged(),
                startWith(this.control.getRawValue()),
            ),
        ]).pipe(map(() => this._collectErrors(this.control)));
    }

    _collectErrors(control: FormControl): string[] {
        const errorObj = control.errors;
        if (!errorObj) return [];

        const errorKeys = Object.keys(control.errors);
        if (errorKeys.length < 1) return [];

        return errorKeys.map((key) => this.errorList[key]);
    }
}
