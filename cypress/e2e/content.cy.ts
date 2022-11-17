import { RACING_CATEGORIES } from "../config/constants";

describe('Page Content', () => {
  it('Should correctly display page title', () => {
    cy.visit('');

    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });

  it('Should have all filters checked by default', () => {
    cy.visit('');

    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    });
  })

  it('Should have 5 items to be displayed on the list', () => {
    cy.visit('');
    cy.get('[data-testid="race-list"] div') 
    .should('have.length', 5) 
  })

  it('Race name, Race number and Countdown should be available', () => {
    cy.visit('');

    cy.get('[data-testid="count-down-string"]').each(($el, index, $list) => {

      //Race number
      cy.get('[data-testid="race-list"]>div>b').eq(index).should('not.be.empty').and('be.visible');

      //Race name
      cy.get('[data-testid="race-list"]>div>p').eq(index).should('not.be.empty').and('be.visible');

      //Countdown timer
      cy.get('[data-testid="race-list"]>p').eq(index).should('not.be.empty').and('be.visible');
  })
  })

});
