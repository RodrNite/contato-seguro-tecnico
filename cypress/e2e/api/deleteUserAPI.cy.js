describe('Deletar Usuário', () => {
  let idValido

  const user = {
    name: 'Usuario para ser Deletado',
    email: 'delete@email.com',
    companies: [1]
  }

  before(() => {
    cy.createUser(user).then((response) => {
      idValido = response.body.id_user
    })
  })

  it('Deve deletar usuário com sucesso', () => {
    cy.deleteUser(idValido).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Deve retornar erro 400 para ID inválido', () => {
    cy.deleteUser('a').then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve confirmar que o usuário foi removido do sistema', () => {
    cy.getUserbyID(idValido).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.not.have.property('id_user')
    })
  })
})