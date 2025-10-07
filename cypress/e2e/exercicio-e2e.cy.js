/// <reference types="cypress" />
const perfil = require('../fixtures/checkout.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    cy.visit('/produtos/')
  });

  it('Deve buscar e adicionar produto ao carrinho', () => {
      // codigo
    })
})