import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  calculations = [
    { type: 'number', value: '12' },
    { type: 'operator', value: '+' },
    { type: 'number', value: '8' },
    { type: 'operator', value: '-' },
    { type: 'number', value: '4' },
    { type: 'operator', value: '*' },
    { type: 'number', value: '3' },
    { type: 'operator', value: '/' },
    { type: 'number', value: '2' },
    { type: 'operator', value: '+' },
    { type: 'number', value: '10' },
    { type: 'operator', value: '-' },
    { type: 'number', value: '5' },
    { type: 'operator', value: '*' },
    { type: 'number', value: '6' },
    { type: 'operator', value: '/' },
    { type: 'number', value: '1' },
  ];

  result: string = '42';
  isDragging: boolean = false;
  startX: number = 0;
  scrollLeft: number = 0;

  controls: Array<{
    value: string;
    type: 'number' | 'operator' | 'action';
  }> = [
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '+', type: 'operator' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '-', type: 'operator' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '*', type: 'operator' },
    { value: 'C', type: 'action' },
    { value: '0', type: 'number' },
    { value: '=', type: 'action' },
    { value: '/', type: 'operator' },
  ];

  handleClick(value: string) {
    // Logika do obsługi kliknięcia przycisku
  }
}
