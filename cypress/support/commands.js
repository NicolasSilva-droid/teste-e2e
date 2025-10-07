Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('carrinho', () => {
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-White').click()
    cy.get('.input-text').clear().type(4)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
});

Cypress.Commands.add('checkout', (nome, sobrenome, empresa, endereço, propriedade, cidade, cep, telefone, email) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_company').type(empresa)
    cy.get('#billing_address_1').type(endereço)
    cy.get('#billing_address_2').type(propriedade)
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#payment_method_bacs').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
});

