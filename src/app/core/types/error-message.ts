export interface IErrorMessage {
  readonly [key: string]: string | undefined;
  readonly minLength?: string;
  readonly maxLength?: string;
  readonly pattern?: string;
  readonly required?: string;
}
