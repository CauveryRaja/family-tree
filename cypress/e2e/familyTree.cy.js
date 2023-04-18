import home from '../selectors/home';
import modal from '../selectors/modal';

describe('Family tree flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display empty content in modal when clicking menu button', () => {
    cy.get(home.familyTree.container).should('be.visible');

    cy.get(home.burgerButton).click();

    cy.get(modal.header).should('be.visible');
    cy.get(modal.emptyContent).should('be.visible');
  });

  it('should display correct member details in modal when clicking on a specific member', () => {
    cy.get(home.familyTree.ambiNode).click();

    cy.get(modal.memberDetails).should('be.visible');
    cy.get(modal.spouse).should('contain', 'Chit');

    cy.get(modal.noRelative).should('contain', 'None');

    cy.get(modal.relationMenu).select('Sister In Law');

    cy.get(modal.relatives).should((relatives) => {
      expect(relatives).to.have.length(2);
      expect(relatives.eq(0)).to.contain('Satya');
      expect(relatives.eq(1)).to.contain('Avi');
    });
  });
});
