Cypress.Commands.add('createUserUI', () => {
  cy.visit('/');
  cy.get('#new-user').click();
});

Cypress.Commands.add('deleteUserUI', () => {
  cy.visit('/');
  cy.get('tbody > :nth-child(2) > :nth-child(7) > :nth-child(2)').should('be.visible').click();
});

Cypress.Commands.add('editUserUI', () => {
  cy.visit('/');
  cy.get(':nth-child(3) > :nth-child(7) > :nth-child(1)').should('be.visible').click();
});

Cypress.Commands.add('fillUserUI', (userData) => {
  const { name, email, phone, city, birthdate } = userData;

  if (name !== undefined) {
    cy.get('[placeholder="Nome"]').clear();
    if (name !== '') cy.get('[placeholder="Nome"]').type(name);
  }
  if (email !== undefined) {
    cy.get('[placeholder="Email"]').clear();
    if (email !== '') cy.get('[placeholder="Email"]').type(email);
  }
  if (phone !== undefined) {
    cy.get('[placeholder="Telefone"]').clear();
    if (phone !== '') cy.get('[placeholder="Telefone"]').type(phone);
  }
  if (city !== undefined) {
    cy.get('[placeholder="Cidade de nascimento"]').clear();
    if (city !== '') cy.get('[placeholder="Cidade de nascimento"]').type(city);
  }
  if (birthdate !== undefined) {
    cy.get('[placeholder="Data de nascimento"]').clear();
    if (birthdate !== '') cy.get('[placeholder="Data de nascimento"]').type(birthdate);
  }
});

Cypress.Commands.add('selectCompanyUI', () => {
  cy.get('[name="search_name_input"]').click();
  cy.get('#multiselectContainerReact li.highlight').first().click({ force: true });
  cy.get('#multiselectContainerReact li.highlight').first().click({ force: true });
  cy.get('#multiselectContainerReact li.option').first().click({ force: true });
});

Cypress.Commands.add('submitUserUI', () => {
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('assertUserVisible', (userName) => {
  cy.contains(userName).should('exist');
});

Cypress.Commands.add('assertFormStillOpen', (fieldPlaceholder) => {
  cy.get(`[placeholder="${fieldPlaceholder}"]`).should('be.visible');
});

Cypress.Commands.add('assertErrorMessage', (message) => {
  cy.contains(message).should('be.visible');
});

Cypress.Commands.add('confirmDeleteUI', () => {
  cy.get('.swal2-confirm').click();
});

Cypress.Commands.add('fillMessage', (message) => {
  cy.get('input:invalid')
    .invoke('prop', 'validationMessage')
    .should('equal', message);
});