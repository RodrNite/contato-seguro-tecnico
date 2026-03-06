describe('Atualizar Usuários', () => {
  let idValid
  const idInvalid = "a"

  const user = {
    name: 'Usuario Original',
    email: 'original@email.com',
    companies: [1]
  }

  const userUpdate = {
    name: 'Usuario Atualizado',
    email: 'update@email.com',
    companies: [1]
  }

  before(() => {
    cy.createUser(user).then((response) => {
      idValid = response.body.id_user
    })
  })

  it('Deve atualizar usuário com sucesso', () => {
    cy.updateUser(idValid, userUpdate).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq(userUpdate.name)
      expect(response.body.email).to.eq(userUpdate.email)
    })
  })

  it('Deve retornar erro 400 para ID inválido', () => {
    cy.updateUser(idInvalid, userUpdate).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 500 para ID inexistente', () => {
    cy.updateUser(9999, userUpdate).then((response) => {
      expect(response.status).to.eq(500)
    })
  })
})
