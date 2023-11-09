// /cypress/integration/calculator.spec.js

describe('Calculator', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('should have working number buttons', () => {
		cy.get('#number2').click();
		cy.get('.display').should('contain', '2');
	});

	it('should update the display with the result of addition', () => {
		cy.get('#number3').click();
		cy.get('#operator-add').click();
		cy.get('#number7').click();
		cy.get('#operator-equals').click();
		cy.get('.display').should('contain', '10');
	});

	it('should chain multiple operations together', () => {
		cy.get('#number5').click();
		cy.get('#operator-add').click();
		cy.get('#number3').click();
		cy.get('#operator-multiply').click();
		cy.get('#number2').click();
		cy.get('#operator-equals').click();
		cy.get('.display').should('contain', '16');
	});

	it('should handle positive, negative, decimals, and very large numbers', () => {
		cy.get('#number5').click();
		cy.get('#operator-subtract').click();
		cy.get('#number7').click();
		cy.get('#operator-equals').click();
		cy.get('#operator-add').click();
		cy.get('#number1').click();
		cy.get('#number0').click();
		cy.get('#operator-equals').click();
		cy.get('#operator-multiply').click();
		cy.get('#number1').click();
		cy.get('#decimal').click();
		cy.get('#number5').click();
		cy.get('#operator-equals').click();
		cy.get('#operator-multiply').click();
		cy.get('#number1').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#operator-equals').click();
		cy.get('.display').should('contain', '120000000');
	});

	it('should handle division by zero', () => {
		cy.get('#number9').click();
		cy.get('#operator-divide').click();
		cy.get('#number0').click();
		cy.get('#operator-equals').click();
		cy.get('.display').should('contain', '0');
	});
});
