describe('API - Criação de Empresa', () => {

  const empresaDadosValidos = {
    name: 'QA Station New',
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

  const empresaSemNome = {
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

  const empresaSemCnpj = {
    name: 'QA Station New',
    address: {
      cep: '95500000',
      country: 'Brasil',
      city: 'Porto Alegre',
      street_location: 'Rua General Mostarda',
      number: '919',
      district: 'Menino Deus'
    }
  }

  const empresaSemEndereco = {
    name: 'QA Station New',
    cnpj: '991836547193'
  }

  it('Deve criar uma empresa', () => {
    cy.createCompany(empresaDadosValidos).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq(empresaDadosValidos.name)
    })
  })

  it('Deve retornar erro 400 ao criar empresa sem nome', () => {
    cy.createCompany(empresaSemNome).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 400 ao criar empresa sem CNPJ', () => {
    cy.createCompany(empresaSemCnpj).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

  it('Deve retornar erro 400 ao criar empresa sem endereço', () => {
    cy.createCompany(empresaSemEndereco).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('invalid data!')
    })
  })

})