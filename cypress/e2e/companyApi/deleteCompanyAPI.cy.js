describe('Deletar Empresa', () => {
  const idValid = "1"
  const idInvalid = "a"
  const idNotFound = "9999"

  it('Deve deletar uma empresa com sucesso', () => {
    cy.deleteCompany(idValid).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('data deleted successfully!')
    })
  })

  it('Deve retornar erro 400 para ID inválido', () => {
    cy.deleteCompany(idInvalid).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 404 para empresa inexistente', () => {
    cy.deleteCompany(idNotFound).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})
