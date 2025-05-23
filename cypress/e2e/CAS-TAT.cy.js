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
    cy.get('#phone-checkbox').click()
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

  it.only('envia o formuário com sucesso usando um comando customizado', () => {
    // const data = {
    //   firstName: 'Adrielly',
    //   lastName: 'Julião',
    //   email: 'adriellycjuliao@gmail.com',
    //   text: 'Nada a dizer aqui.'
    // }

    cy.fillMandatoryFieldsAndSubmit() // -> cy.fillMandatoryFieldsAndSubmit(data)
    cy.get('.success').should('be.visible')
  })

  
})