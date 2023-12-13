import { InjectionToken } from '@angular/core';
import { ErrorMessages } from '@modules/shared/data-access';

export const ERROR_MESSAGE_DATA = new InjectionToken<ErrorMessages>(
    'ERROR_MESSAGE_DATA',
);
