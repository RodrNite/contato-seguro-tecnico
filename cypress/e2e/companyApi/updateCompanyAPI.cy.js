describe('Atualizar Empresa', () => {

  const idValid = '1'
  const idInvalid = 'a'
  const idNotFound = '9999'

  const companyUpdate = {
    name: 'QA Station Updated',
    cnpj: '991836547193',
    address: {
      cep: '95500000',
      country: 'Brasil',
      city: 'Porto Alegre',
      street_location: 'Rua General Mostarda',
      number: '919',
      district: 'Menino Deus'
    }
  }

  it('Deve atualizar empresa com sucesso', () => {
    cy.updateCompany(idValid, companyUpdate).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq(companyUpdate.name)
    })
  })

  it('Deve retornar erro 400 para ID inválido', () => {
    cy.updateCompany(idInvalid, companyUpdate).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 500 para ID inexistente', () => {
    cy.updateCompany(idNotFound, companyUpdate).then((response) => {
      expect(response.status).to.eq(500)
    })
  })

})