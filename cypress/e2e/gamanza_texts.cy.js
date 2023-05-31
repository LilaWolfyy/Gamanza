
const textAbout01 = 'Gamanza is an ISO 27001 certified technology provider to the international iGaming industry, backed by Stadtcasino Baden AG, one of the largest leisure and entertainment groups in Switzerland. Gamanza has grown up on the complexities, demands and specific requirements of a newly regulated market, meaning that compliance and regulation have been built into Gamanza’s DNA.'
const textAbout02 = 'The iGaming Superstore™ is Gamanza’s innovative suite of iGaming products, which has been developed by a management team of experts in both B2B software solutions and B2C operations. The iGaming Superstore™ includes a world-class account platform with an ultra-sleek back office, flexible compliance framework, payment gateway, customisable gamification system and a cutting-edge real-time CRM.'
const textCertified = 'The ISO 27001 certification is globally recognised as the highest standard of accreditation for Information Security Management Systems. Gamanza is certified for the development of an account platform for online casino\noperations, quality assurance, b2b account management and associated IT Services.'
const textPlatform = 'The GaminGenius™ Platform is designed for regulated iGaming markets. Built around several microservices it incorporates a flexible compliance framework, payment gateway, bonus engine and responsible gaming tools.'
const textCRMAndGamefication = 'Gamanza strives to provide operators with exceptional player engagement tools and a unique UX. Two key services are a state-of-the art real time CRM and a customisable Gamification software to drive player acquisition and retention!'
const textContentAnd3rdParties = 'Gamanza offers a one-stop shop for player on-boarding, KYC and other 3rd Party services, as well as game content from top providers, supported by a comprehensive bonus engine.'
const textComplianceAndRegulation = 'Gamanza has the experience and know-how to guide casinos through the licensing process, deal with local regulators and configure an adaptable compliance system for any jurisdiction.'
const textModularPlatform = 'We can provide a customised turn-key solution, or integrate individual services to your existing platform'
const textRegulatedMarkets = 'A rigorously tested and certified platform that provides an adaptable compliance framework for multiple jurisdictions'
const textPlayerRetention = 'Our gamification software adds a new layer of player entertainment and drives engagement and retention'
const textLandBasedToOnline = 'One of our specialities, we have the background and experience to build a successful new arm to your business'
const textSmartBackOffice = 'The GaminGenius™ Admin is a highly intuitive back office system from which all Gamanza services are managed'
const textGetInTouch = 'We think differently at Gamanza and we all share an appetite for real innovation and fundamental evolution of the online betting and gaming sector. We want to work with forward-thinking casino and sportsbook operators in global regulated markets that share our vision of delivering players an exciting, personalised, social and responsible gaming experience.'

beforeEach(function(){
    cy.viewport(1280, 720)
    cy.visit('https://gamanza.com/')
})

/**Predvidevam da bi bila boljša opcija za testiranje, če bi bili zgornji texti v svoji datoteki ne v tej. Sam v to se še nisem poglobila*/

describe('Check Texts', function() {

    it('Text About', function() {
        cy.get(':nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row > .edgtf-full-section-inner > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > :nth-child(1) > span').invoke('text').then((text) =>{
            expect(text).to.eq(textAbout01)
        })
        cy.get('.edgtf-full-section-inner > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > :nth-child(2)').invoke('text').then((text) =>{
            expect(text).to.eq(textAbout02)
        })
    })

    it('Text ISO certified', function() {
        // this text has a hidden \n
        cy.get(':nth-child(8) > .edgtf-section-inner > .edgtf-section-inner-margin > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row > .edgtf-full-section-inner > .vc_col-sm-10 > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > span').invoke('text').then((text) =>{
            expect(text).to.eq(textCertified)
        })
        
    })

    it('Platform', function() {
        cy.get('.vc_custom_1607617309533 > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textPlatform)
        })
        
    })

    it('CRM And Gamification', function() {
        cy.get('.vc_custom_1614851989186 > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textCRMAndGamefication)
        })
        
    })

    it('Content and 3rd parties', function() {
        cy.get('.vc_custom_1642610465803 > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textContentAnd3rdParties)
        })
        
    })

    it('Compliance and Regulation', function() {
        cy.get('.vc_custom_1626883658045 > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textComplianceAndRegulation)
        })
        
    })

    it('Modular Platform', function() {
        cy.get(':nth-child(15) > .clearfix.edgtf-section-inner > :nth-child(1) > .vc_hidden-md > :nth-child(1) > :nth-child(1) > :nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > span').invoke('text').then((text) =>{
            expect(text).to.eq(textModularPlatform)
        })
        
    })

    it('Regulated Markets', function() {
        cy.get('.vc_hidden-md > :nth-child(1) > :nth-child(1) > :nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(2) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textRegulatedMarkets)
        })
        
    })

    it('Player Retention', function() {
        cy.get(':nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(3) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textPlayerRetention)
        })
        
    })

    it('Land-based to online', function() {
        cy.get(':nth-child(15) > .clearfix.edgtf-section-inner > :nth-child(1) > .vc_hidden-md > :nth-child(1) > :nth-child(1) > :nth-child(7) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textLandBasedToOnline)
        })
        
    })

    it('Smart back office', function() {
        cy.get(':nth-child(7) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(2) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p').invoke('text').then((text) =>{
            expect(text).to.eq(textSmartBackOffice)
        })
        
    })

    it('Get in touch', function() {
        cy.get('.vc_hidden-md > :nth-child(1) > :nth-child(1) > .edgtf-elements-holder > [data-animation-delay="300"] > .edgtf-elements-holder-item-inner > .edgtf-elements-holder-item-content > .wpb_text_column > .wpb_wrapper > p > span').invoke('text').then((text) =>{
            expect(text).to.eq(textGetInTouch)
        })
        
    })

})