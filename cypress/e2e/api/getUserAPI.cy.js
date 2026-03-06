describe('Buscar Usuário por ID', () => {
  const idInvalid = "a"
  let idValid

  const user = {
    name: 'Tester da Silva Junior',
    email: 'user@email.com',
    companies: [1]
  }

  before(() => {
    cy.createUser(user).then((response) => {
      idValid = response.body.id_user
    })
  })

  it('Deve retornar status 200 para usuário existente', () => {
    cy.getUserbyID(idValid).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id_user')
      expect(response.body.name).to.eq(user.name)
      expect(response.body.email).to.eq(user.email)
    })
  })

  it('Deve retornar erro 400 para ID inválido', () => {
    cy.getUserbyID(idInvalid).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })
  it('Deve retornar erro 500 para ID inexistente', () => {
    cy.getUserbyID(99999).then((response) => {
      expect(response.status).to.eq(500)
    })
  })
})

describe('Buscar Todos os Usuários', () => {
  it('Deve retornar uma lista de usuários', () => {
    cy.getAllUsers().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(1)
    })
  })
})
