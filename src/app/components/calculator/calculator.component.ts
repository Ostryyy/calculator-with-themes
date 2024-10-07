import { evaluate } from 'mathjs';
import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

interface CalculationItem {
  type: 'number' | 'operator';
  value: string;
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  currentTheme: WritableSignal<string> = signal('theme-retro');

  themes = [
    { name: 'Retro', className: 'theme-retro' },
    { name: 'Modern', className: 'theme-modern' },
    { name: 'Hacker', className: 'theme-hacker' },
  ];

  showThemeSelector = false;

  changeTheme(className: string) {
    this.currentTheme.set(className);
    this.showThemeSelector = false;
  }

  toggleThemeSelector() {
    this.showThemeSelector = !this.showThemeSelector;
  }
  calculations: CalculationItem[] = [];
  result: string = '';
  currentInput: string = '';
  operatorClicked: boolean = false;

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
    if (value === 'C') {
      this.clear();
    } else if (value === '=') {
      this.calculateResult();
    } else if (this.isOperator(value)) {
      this.handleOperator(value);
    } else {
      this.handleNumber(value);
    }
  }

  handleNumber(value: string) {
    if (this.operatorClicked) {
      this.currentInput = '';
      this.operatorClicked = false;
    }

    this.currentInput += value;
    this.updateCalculations({ type: 'number', value: this.currentInput });
  }

  handleOperator(value: string) {
    if (
      this.calculations.length > 0 &&
      this.isOperator(this.calculations[this.calculations.length - 1].value)
    ) {
      return;
    }

    this.calculations.push({ type: 'operator', value });
    this.operatorClicked = true;
  }

  calculateResult() {
    try {
      const expression = this.calculations.map((item) => item.value).join('');
      this.result = `= ${evaluate(expression) ?? 0}`;
    } catch (error) {
      this.result = 'Error';
    }
  }

  updateCalculations(item: CalculationItem) {
    if (!this.operatorClicked) {
      if (
        this.calculations.length > 0 &&
        this.calculations[this.calculations.length - 1].type === 'number'
      ) {
        this.calculations[this.calculations.length - 1] = item;
      } else {
        this.calculations.push(item);
      }
    }
  }

  isOperator(value: string): boolean {
    return ['+', '-', '*', '/'].includes(value);
  }

  clear() {
    this.calculations = [];
    this.result = '';
    this.currentInput = '';
  }
}
