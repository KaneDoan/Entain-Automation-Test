/// <reference types="cypress" />
// @ts-check

describe('Countdown Timer', () => {
  //Check if the coundown timer is render
  it('The countdown timer should exist', () => {
    cy.visit('');

    cy.get('[data-testid=count-down-string]').should('exist');
  });

  it('There should be 5 count down timers', () => {
    cy.visit('');

    cy.get('[data-testid="count-down-string"]') 
    .should('have.length', 5) 
  });

  it('Race should disappear from the list after 1 min past the start time', () => {
    cy.visit('');

    cy.get('[data-testid="count-down-string"]').each(($el, $index, $list) => {
          //Timer should not each -1m
          cy.wrap($el).invoke('text').should('not.contain','-1m')
    })
    });

  it('Coundown timer should update every second', () => {
    cy.visit('');

    cy.get('[data-testid="count-down-string"]').each(($el, $index, $list) => {
      //Check when timer started counting second
      if ($el.text().includes('s')) {
        cy.wrap($el).invoke('text').then
        ((el1)=>{
          cy.wait(1000); //wait for 1 sec
          cy.wrap($el).invoke('text').should((el2) => { expect(el1).not.to.equal(el2) })
        })
      }
  })
  });

});
