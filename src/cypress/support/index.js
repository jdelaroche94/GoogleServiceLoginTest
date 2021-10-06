import './commands'

require('cypress-xpath')

Cypress.on('uncaught:exception', err => {
    return false
})

Cypress.on('window:before:load', win => {
    win.fetch = null
})