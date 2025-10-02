/// <reference types="cypress"/>
import produtosPage from "../support/page_objects/produtos.page";


describe('Funcionalidade: Buscar e adicionar produto ao carrinho', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve buscar e adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Ingrid Running Jacket')
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-White').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type('Aluno')
        cy.get('#billing_last_name').type('Teste')
        cy.get('#billing_company').type('Ebac')
        cy.get('#billing_address_1').type('Domingos, 174')
        cy.get('#billing_address_2').type('Casa')
        cy.get('#billing_city').type('Florianópolis')
        cy.get('#billing_postcode').type('01310-930')
        cy.get('#billing_phone').type('99865-2790')
        cy.get('#billing_email').type('alunoebac@teste.com')
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('exist')
    })

});