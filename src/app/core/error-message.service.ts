import { Injectable } from '@angular/core';

import { IErrorMessage } from './types/error-message';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  public readonly firstName: IErrorMessage = {
    required: 'Please enter a first name.',
  };
  public readonly lastName: IErrorMessage = {
    required: 'Please enter a last name.',
  };
  public readonly phoneNumber: IErrorMessage = {
    required: 'Please enter a phone number.',
    pattern: 'Please enter a valid phone number.',
  };
  public readonly streetAddress: IErrorMessage = {
    required: 'Please enter a phone number.',
    pattern: 'Please enter a valid phone number.',
  };

  public constructor() {}
}
