describe('API - Busca de Empresas', () => {

  const idValido = '1'
  const idInvalido = "a"
  const idInexistente = "99999"

  it('Deve retornar 200 para lista de todas as empresas cadastradas', () => {
    cy.getAllCompanies().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(1)
      
      if (response.body.length > 1) {
        expect(response.body[0]).to.have.property('id_company')
        expect(response.body[0]).to.have.property('name')
        expect(response.body[0]).to.have.property('id_adress')
      }
    })
  })

  it.only('Deve retornar status 200 para empresa existente', () => {
    cy.getCompanyByID(idValido).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id_company', idValido)
      expect(response.body).to.have.property('name')
    })
  })

  it('Deve retornar erro 400 para ID inválido', () => {
    cy.getCompanyByID(idInvalido).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 404 para ID inexistente', () => {
    cy.getCompanyByID(idInexistente).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body.message).to.eq('requested data not found!')
    })
  }) 

})