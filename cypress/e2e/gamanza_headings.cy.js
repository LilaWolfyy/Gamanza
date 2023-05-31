beforeEach(function(){
    cy.viewport(1280, 720)
    cy.visit('https://gamanza.com/')
})

/**There is definitely a better way of doing this i'm guessing sam nevem kako... 
 * opazla sm da ima "The iGaming Superstore™",ki je na vrhu, tage h1,h2,h3,h4 glede na resolucijo ki je naštivama ampak iskreno nevem kako bi to testirala.*/

describe('Check Headings', function() {

    it('Heading 1', function() {
        cy.get('h1').contains('The iGaming Superstore™')
    })

    it('Heading 2', function() {
        cy.get('h2').contains('About Gamanza')
        cy.get('h2').contains('The iGaming Superstore')
        cy.get('h2').contains('Why Gamanza?')
        cy.get('h2').contains('Gamanza in the News')
        cy.get('h2').contains('Get in touch')
    })

    it('Heading 3', function() {
        cy.get('h3').contains('Our clients')
    })

    it('Heading 4', function() {
        cy.get('h4').contains('ISO 27001 certified')
    })

    it('Heading 5', function() {
        cy.get('h5').contains('Modular platform')
        cy.get('h5').contains('Regulated markets')
        cy.get('h5').contains('Player retention')
        cy.get('h5').contains('Land-based to online')
        cy.get('h5').contains('Smart back office')
        cy.get('h5').contains('Write Us')
    })

    it('Heading 6', function() {
        cy.get('h6').contains('Platform')
        cy.get('h6').contains('Content & 3rd Parties')
        cy.get('h6').contains('CRM & Gamification')
        cy.get('h6').contains('Compliance & Regulation')
    })

})