import { ElementRef } from '@angular/core';
import { CapitalDirective } from './capital.directive';

describe('CapitalDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new CapitalDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
