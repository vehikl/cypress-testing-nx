import { getGreeting, getStarButton } from '../support/app.po';

describe('todo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to todo!');
  });

  it('should navigate to GitHub wher you press the star button', () => {
    // find and press the button
    getStarButton().should('have.attr', 'href', 'https://github.com/nrwl/nx');
  });

  it('should open view dependency graph when click', () => {
    cy.get('[data-cy=dep-graph]').click().should('have.attr', 'open');
  });

  it('should navigate to the page 2 url, when the page-2 button is clicked', () => {
    cy.get('[role=navigation]>ul>li:nth-child(2)>*')
      .click()
      .url()
      .should('include', 'page-2');
  });

  it('should show the counter component on page 2', () => {
    cy.visit('localhost:4200/page-2');
    cy.get('[data-cy=counter]').should('be.visible');
  });
});
