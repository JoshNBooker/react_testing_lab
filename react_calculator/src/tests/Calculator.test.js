import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
	let container;
	beforeEach(() => {
		container = render(<Calculator />);
	});

	it('should change running total on number enter', () => {
		const button4 = container.getByTestId('number4');
		const runningTotal = container.getByTestId('running-total');
		fireEvent.click(button4);
		expect(runningTotal.textContent).toEqual('4');
	});

	it('should add 1 to 4 and get 5', () => {
		const addButton = container.getByTestId('operator-add');
		const runningTotal = container.getByTestId('running-total');

		fireEvent.click(container.getByTestId('number1'));
		fireEvent.click(addButton);
		fireEvent.click(container.getByTestId('number4'));
		fireEvent.click(container.getByTestId('operator-equals'));

		expect(runningTotal.textContent).toEqual('5');
	});

	it('should subtract 4 from 7 and get 3', () => {
		const subtractButton = container.getByTestId('operator-subtract');
		const runningTotal = container.getByTestId('running-total');

		fireEvent.click(container.getByTestId('number7'));
		fireEvent.click(subtractButton);
		fireEvent.click(container.getByTestId('number4'));
		fireEvent.click(container.getByTestId('operator-equals'));

		expect(runningTotal.textContent).toEqual('3');
	});

	it('should multiply 3 by 5 and get 15', () => {
		const multiplyButton = container.getByTestId('operator-multiply');
		const runningTotal = container.getByTestId('running-total');

		fireEvent.click(container.getByTestId('number3'));
		fireEvent.click(multiplyButton);
		fireEvent.click(container.getByTestId('number5'));
		fireEvent.click(container.getByTestId('operator-equals'));

		expect(runningTotal.textContent).toEqual('15');
	});

	it('should divide 21 by 7 and get 3', () => {
		const divideButton = container.getByTestId('operator-divide');
		const runningTotal = container.getByTestId('running-total');

		fireEvent.click(container.getByTestId('number2'));
		fireEvent.click(container.getByTestId('number1'));
		fireEvent.click(divideButton);
		fireEvent.click(container.getByTestId('number7'));
		fireEvent.click(container.getByTestId('operator-equals'));

		expect(runningTotal.textContent).toEqual('3');
	});

	it('should concatenate multiple number button clicks', () => {
		const runningTotal = container.getByTestId('running-total');

		fireEvent.click(container.getByTestId('number2'));
		fireEvent.click(container.getByTestId('number3'));
		fireEvent.click(container.getByTestId('number8'));
		fireEvent.click(container.getByTestId('operator-equals'));

		expect(runningTotal.textContent).toEqual('238');
	});

	it('should chain multiple operations together', () => {
		const runningTotal = container.getByTestId('running-total');

		fireEvent.click(container.getByTestId('number5'));
		fireEvent.click(container.getByTestId('operator-add'));
		fireEvent.click(container.getByTestId('number3'));
		fireEvent.click(container.getByTestId('operator-multiply'));
		fireEvent.click(container.getByTestId('number2'));
		fireEvent.click(container.getByTestId('operator-equals'));

		expect(runningTotal.textContent).toEqual('16');
	});

	it('should clear the running total without affecting the calculation', () => {
		const runningTotal = container.getByTestId('running-total');

		fireEvent.click(container.getByTestId('number8'));
		fireEvent.click(container.getByTestId('clear'));
		fireEvent.click(container.getByTestId('number2'));

		expect(runningTotal.textContent).toEqual('2');
	});
});
