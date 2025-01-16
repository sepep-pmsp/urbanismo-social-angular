import { InjectionToken } from '@angular/core';

export const DOCUMENT = new InjectionToken<Document | null>('DocumentToken', {
  providedIn: 'root',
  factory: () => (typeof document !== 'undefined' ? document : null)
});
