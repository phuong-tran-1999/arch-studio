import { ErrorMessages } from '../types';

export const CONTACT_FORM_ERROR_MESSAGES: ErrorMessages = {
    name: {
        required: 'This field is required',
        maxlength: 'Maximum length exceeded. Please limit to 20 characters',
    },
    email: {
        required: 'This field is required',
        email: 'Please enter a valid email address',
    },
    message: {
        required: 'This field is required',
        maxlength: 'Maximum length exceeded. Please limit to 200 characters',
    },
};
