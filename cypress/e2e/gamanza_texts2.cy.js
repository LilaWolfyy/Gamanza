import { Homepage } from "./gamanzaHomepage"
const homepage = new Homepage()


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

/** Če pravilno razumem arhitekturo pri cypressu so v cy.js skripti testi in v .js skripti dejanski klici na spletno stran. Tale je narejena po tej arhitekturi*/

beforeEach(function(){
    cy.viewport(1280, 720)
    cy.visit('https://gamanza.com/')
})

describe('Check Texts', function() {

    it('Text About', function() {
        homepage.checkText('textAbout01', textAbout01)
    })

    it('Text About 2', function() {
        homepage.checkText('textAbout02', textAbout02)
    })

    it('Text ISO certified', function() {
        homepage.checkText('textCertified', textCertified)
    })

    it('Platform', function() {
        homepage.checkText('textPlatform', textPlatform)
    })

    it('CRM And Gamification', function() {
        homepage.checkText('textCRMAndGamefication', textCRMAndGamefication)
    })

    it('Content and 3rd parties', function() {
        homepage.checkText('textContentAnd3rdParties', textContentAnd3rdParties)
    })

    it('Compliance and Regulation', function() {
        homepage.checkText('textComplianceAndRegulation', textComplianceAndRegulation)
    })

    it('Modular Platform', function() {
        homepage.checkText('textModularPlatform', textModularPlatform)
    })

    it('Regulated Markets', function() {
        homepage.checkText('textRegulatedMarkets', textRegulatedMarkets)
    })

    it('Player Retention', function() {
        homepage.checkText('textPlayerRetention', textPlayerRetention)
    })

    it('Land-based to online', function() {
        homepage.checkText('textLandBasedToOnline', textLandBasedToOnline)
    })

    it('Smart back office', function() {
        homepage.checkText('textSmartBackOffice', textSmartBackOffice)
    })

    it('Get in touch', function() {
        homepage.checkText('textGetInTouch', textGetInTouch)
    })

})