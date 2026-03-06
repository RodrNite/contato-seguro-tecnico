describe('API de Criação de Usuário', () => {
  const user = {
    name: 'Tester da Silva',
    email: 'user@email.com',
    companies: [1]
  }
  const userSemNome = {
    email: 'user@email.com',
    companies: [1]
  }
  const userSemEmail = {
    name: 'Tester da Silva',
    companies: [1]
  }
  const userSemEmpresa = {
    name: 'Tester da Silva',
    email: 'user@email.com'
  }
  const userEmailInvalido = {
    name: 'Tester da Silva',
    email: 'userinvalido!#--email.com',
    companies: [1]
  }
  const userEmpresaInexistente = {
    name: 'Tester da Silva',
    email: 'user@email.com',
    companies: [999]
  }

  it('Deve criar um novo usuário com sucesso', () => {
    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id_user')
      expect(response.body.name).to.eq(user.name)
      expect(response.body.email).to.eq(user.email)
    })
  })

  it('Deve retornar erro 400 ao criar usuário sem nome', () => {
    cy.createUser(userSemNome).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 400 ao criar usuário sem email', () => {
    cy.createUser(userSemEmail).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 400 ao criar usuário sem empresa', () => {
    cy.createUser(userSemEmpresa).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 400 ao criar usuário com e-mail em formato inválido', () => {
    cy.createUser(userEmailInvalido).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 500 ao criar usuário com empresa inexistente', () => {
    cy.createUser(userEmpresaInexistente).then((response) => {
      expect(response.status).to.eq(500)
      expect(response.body.message).to.eq('an error occured during request execution!')
    })
  })
})