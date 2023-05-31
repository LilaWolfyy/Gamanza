
const platform = '#nav-menu-item-4369 > a'
const data_vault = '#nav-menu-item-4367 > a'
const game_store = '#nav-menu-item-4374 > a'
const real_time_crm = '#nav-menu-item-4466 > a'
const gamification = '#nav-menu-item-4373 > a'
const events = '#nav-menu-item-4994 > a'
const about = '#nav-menu-item-4391 > [href="https://gamanza.com/igaming-platform-provider/"]'


/* Tuki sem dala before each da mi vsakič gre na homepage. Lahko bi naredila da se samo premika iz ene strani direktno na naslednjo, kar bi bilo hitreje za sistem. 
Po drugi strani je pa fino vedeti da iz homepaga pelje na vsako stran pravilno.
Lahko bi se tudi stestiralo, če se iz vsake strani uspešno pride na vsako stran*/

beforeEach(function(){
    cy.viewport(1280, 720)
    cy.visit('https://gamanza.com/')
})

describe('Check Page Titles', function() {

    it('Homepage', function() {
        cy.title().should('eq', 'Homepage - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/')
    })

    it('Platform', function() {
        cy.get(platform).click()
        cy.title().should('eq', 'Platform - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/igaming-platform/')
    })

    it('Data Vault', function() {
        cy.get(data_vault).click()
        cy.title().should('eq', 'Data Vault - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/digital-data-vault/')
    })

    it('Game Store', function() {
        cy.get(game_store).click()
        cy.title().should('eq', 'Game Store - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/igaming-content/')
    })

    it('Real-Time CRM', function() {
        cy.get(real_time_crm).click()
        cy.title().should('eq', 'Real-time CRM - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/real-time-crm/')
    })

    it('Gamification', function() {
        cy.get(gamification).click()
        cy.title().should('eq', 'Gamification - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/gamification-for-igaming/')
    })

    it('Events', function() {
        cy.get(events).click()
        cy.title().should('eq', 'Events - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/events/')
    })

    it('About', function() {
        cy.get(about).click()
        cy.title().should('eq', 'About - Gamanza Group')
        cy.url().should('eq', 'https://gamanza.com/igaming-platform-provider/')
    })
    
})