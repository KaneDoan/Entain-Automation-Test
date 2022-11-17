//I am not quite sure what should be the expected race in each category, so I just check if the filter able to return 5 race results.

describe('Category Filters', () => {
  it('Should only show Thoroughbred race if that category is selected', () => {
    cy.visit('');

    cy.get('input[type="checkbox"]')
    .each(($el, index) => {
    if (index === 1) {
      cy.wrap($el).click();
    }
    if (index === 2) {
      cy.wrap($el).click();
    }
  })
    //Only Throughbred should be checked
    cy.get('[data-testid = "category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"]>label').should('contain','Thoroughbred');
    cy.get('[data-testid = "category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"]>input').should('be.checked').and('be.visible');

    //Should show all 5 Throghbred race
    cy.get('[data-testid="race-name"]>p').should('have.length',5).and('be.visible')
  });

  it('Should only show Greyhound race if that category is selected', () => {
    cy.visit('');

    cy.get('input[type="checkbox"]')
    .each(($el, index) => {
    if (index === 0) {
      cy.wrap($el).click();
    }
    if (index === 2) {
      cy.wrap($el).click();
    }
  })

     //Only Greyhound should be checked
     cy.get('[data-testid = "category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"]>label').should('contain','Greyhound');
     cy.get('[data-testid = "category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"]>input').should('be.checked').and('be.visible');
 
     //Should show all 5 Greyhound race
     cy.get('[data-testid="race-name"]>p').should('have.length',5).and('be.visible')
  });

  it('Should only show Harness if that category is selected', () => {
    cy.visit('');

     cy.get('input[type="checkbox"]')
    .each(($el, index) => {
    if (index === 0) {
      cy.wrap($el).click();
    }
    if (index === 1) {
      cy.wrap($el).click();
    }
  })

    //Only Harness should be checked
    cy.get('[data-testid = "category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"]>label').should('contain','Harness');
    cy.get('[data-testid = "category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"]>input').should('be.checked').and('be.visible');

    //Should show all 5 Harness race
    cy.get('[data-testid="race-name"]>p').should('have.length',5).and('be.visible')
  });
});
