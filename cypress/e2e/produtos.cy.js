/// <reference types="cypress"/>
import produtosPage from "../support/page_objects/produtos.page";


describe('Funcionalidade: Buscar e adicionar produto ao carrinho', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve buscar e adicionar produto ao carrinho preenchendo o checkout', () => {
        produtosPage.buscarProduto('Ingrid Running Jacket')
        cy.carrinho()
        cy.checkout('Aluno', 'Teste', 'Ebac', 'Domingos, 174', 'Casa', 'Florianópolis', '01310-930', '99865-2790', 'alunoebac@teste.com')
        cy.get('.woocommerce-notice').should('exist')
    })

});