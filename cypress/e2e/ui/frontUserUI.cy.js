describe('Cadastro de Usuário', () => {
  const validUser = {
    name: 'Usuario Teste',
    email: 'testersilva@email.com',
    phone: '99999-9999',
    city: 'São Paulo',
    birthdate: '1980-01-01',
  }

  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.createUserUI()
    cy.fillUserUI(validUser)
    cy.selectCompanyUI()
    cy.submitUserUI()
    cy.assertUserVisible(validUser.name)
  })

  it('Não deve cadastrar usuário sem NOME', () => {
    cy.createUserUI()
    cy.fillUserUI({ ...validUser, name: '' })
    cy.selectCompanyUI()
    cy.submitUserUI()
    cy.fillMessage('Preencha este campo.')
    cy.assertFormStillOpen('Nome')
  })

  it('Não deve cadastrar usuário sem EMAIL', () => {
    cy.createUserUI()
    cy.fillUserUI({ ...validUser, email: '' })
    cy.selectCompanyUI()
    cy.submitUserUI()
    cy.fillMessage('Preencha este campo.')
    cy.assertFormStillOpen('Email')
  })

  it('Não deve cadastrar usuário com EMAIL inválido', () => {
    cy.createUserUI()
    cy.fillUserUI({ ...validUser, email: 'email-invalido' })
    cy.selectCompanyUI()
    cy.submitUserUI()
    cy.assertErrorMessage('Insira um e-mail válido!')
  })

  it('Não deve cadastrar usuário sem TELEFONE', () => {
    cy.createUserUI()
    cy.fillUserUI({ ...validUser, phone: '' })
    cy.selectCompanyUI()
    cy.submitUserUI()
    cy.assertErrorMessage('Insira o telefone do usuário!')
  })

  it('Não deve cadastrar usuário com TELEFONE inválido', () => {
    cy.createUserUI()
    cy.fillUserUI({ ...validUser, phone: '@@123aaa' })
    cy.selectCompanyUI()
    cy.submitUserUI()
    cy.assertErrorMessage('Insira o telefone do usuário!')
  })

  it('Não deve cadastrar usuário sem Empresa vinculada', () => {
    cy.createUserUI()
    cy.fillUserUI(validUser)
    cy.submitUserUI()
    cy.assertErrorMessage('Insira as empresas do usuário!')
  })
})

describe('Exclusão de Usuário', () => {
  it('Deve deletar um usuário com sucesso', () => {
    cy.deleteUserUI()
    cy.confirmDeleteUI()
    cy.assertErrorMessage('Usuário deletado com sucesso!')
    cy.assertUserVisible('Usuario para ser Deletado')
  })
})

describe('Edição de Usuário', () => {
  it('Deve abrir janela de edição ao clicar em editar', () => {
    cy.editUserUI()
    cy.assertFormStillOpen('Nome')
  })
})