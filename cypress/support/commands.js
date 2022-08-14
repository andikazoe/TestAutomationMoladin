import 'cypress-file-upload'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

const { login_username, login_password } = require('../config')

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
	cy.get('input[type="text"]').clear().type(login_username)
	cy.get('input[type="password"]').clear().type(login_password)
	cy.get('.sc-gsDKAQ > button').click()
})

Cypress.Commands.add('switchToIframe', (iframe) => {
	cy.frameLoaded('#snap-midtrans')
	.its('0.contentDocument.body')
	.should('be.visible')
	.then(cy.wrap);
})
