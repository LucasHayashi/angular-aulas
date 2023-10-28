import { CanDeactivateFn } from '@angular/router';
import { IFormDeactivate } from '../interfaces/iform-deactivate';

export const formDeactivateGuard: CanDeactivateFn<IFormDeactivate> = (component, currentRoute, currentState, nextState) => {
  return component.possuiAlteracoes();
};
