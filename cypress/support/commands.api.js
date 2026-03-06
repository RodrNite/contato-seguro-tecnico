Cypress.Commands.add('createUser', (user) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/api/user/create`,
        body: user,
        failOnStatusCode: false
    })
})    

Cypress.Commands.add('getUserbyID', (id) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/api/user/${id}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('getAllUsers', () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/api/user`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('deleteUser', (id) => {
    return cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiUrl')}/api/user/${id}/delete`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('updateUser', (id, user) => {
    return cy.request({
        method: 'PATCH',
        url: `${Cypress.env('apiUrl')}/api/user/${id}/update`,
        body: user,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('getApiHome', () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('createCompany', (companyData) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/api/company/create`,
    body: companyData,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getAllCompanies', () => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/api/company`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getCompanyByID', (id) => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/api/company/${id}`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('deleteCompany', (id) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrl')}/api/company/${id}/delete`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('updateCompany', (id, companyData) => {
  return cy.request({
    method: 'PATCH',
    url: `${Cypress.env('apiUrl')}/api/company/${id}/update`,
    body: companyData,
    failOnStatusCode: false
  })
})