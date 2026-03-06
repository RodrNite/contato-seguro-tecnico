describe('API - Health Check', () => {
  it('Deve validar que a Home Route da API está respondendo', () => {
    cy.getApiHome().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('msg', 'home')
    })
  })
})
