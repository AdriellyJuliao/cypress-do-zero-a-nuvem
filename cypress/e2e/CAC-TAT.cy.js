describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Adrielly')
    cy.get('#lastName').type('Julião')
    cy.get('#email').type('adriellycjuliao@gmail.com')
    cy.get('#open-text-area').type('Não tenho nada a dizer.')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Adrielly')
    cy.get('#lastName').type('Julião')
    cy.get('#email').type('adriellycjuliao#gmail.com')
    cy.get('#open-text-area').type('Não tenho nada a dizer.')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  });

  it('Verifica se ao digitar um valor não-numérico no campo de telefone, se seu valor continuará vazio.', () => {
    cy.get('#phone')
    .type('adcdef')
    .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Adrielly')
    cy.get('#lastName').type('Julião')
    cy.get('#email').type('adriellycjuliao@gmail.com')
    cy.get('#open-text-area').type('Não tenho nada a dizer.')
    cy.get('#phone-checkbox').check()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
    .type('Adrielly')
    .should('have.value', 'Adrielly')
    .clear()
    .should('have.value', '')

    cy.get('#lastName')
    .type('Julião')
    .should('have.value', 'Julião')
    .clear()
    .should('have.value', '')

    cy.get('#email')
    .type('adriellycjuliao@gmail.com')
    .should('have.value', 'adriellycjuliao@gmail.com')
    .clear()
    .should('have.value', '')

    cy.get('#phone').type('31988888888')
    .should('have.value', '31988888888')
    .clear()
    .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('#firstName').type('Adrielly')
    cy.get('#lastName').type('Julião')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    // const data = {
    //   firstName: 'Adrielly',
    //   lastName: 'Julião',
    //   email: 'adriellycjuliao@gmail.com',
    //   text: 'Nada a dizer aqui.'
    // }

    cy.fillMandatoryFieldsAndSubmit() // -> cy.fillMandatoryFieldsAndSubmit(data)
    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
  });
  
  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
  cy.get('#product')
  .select('mentoria')
  .should('have.value', 'mentoria')
  });

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
    .select(1)
    .should('have.value', 'blog')
  });

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
  });

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each(typeOfService =>{
        cy.wrap(typeOfService)
        .check()
        .should('be.checked')
      })
  });

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  });

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json')
    .should(input => {
      expect((input[0].files[0].name)).to.equal('example.json')
    })
  })

  it('Crie um teste chamado seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(input => {
      expect((input[0].files[0].name)).to.equal('example.json')
    })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture("example.json").as('sampleFile')
    cy.get('input[type="file"]')
    .selectFile('@sampleFile')
    .should(input => {
      expect((input[0].files[0].name)).to.equal('example.json')
    })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank' )
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
    .should('be.visible')
  })


})