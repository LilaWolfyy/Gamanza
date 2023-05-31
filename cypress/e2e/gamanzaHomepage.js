export class Homepage{


    textAbout01 = ':nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row > .edgtf-full-section-inner > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > :nth-child(1) > span'
    textAbout02 = '.edgtf-full-section-inner > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > :nth-child(2)'
    textCertified = ':nth-child(8) > .edgtf-section-inner > .edgtf-section-inner-margin > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row > .edgtf-full-section-inner > .vc_col-sm-10 > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > span'
    textPlatform = '.vc_custom_1607617309533 > .wpb_wrapper > p'
    textCRMAndGamefication = '.vc_custom_1614851989186 > .wpb_wrapper > p'
    textContentAnd3rdParties = '.vc_custom_1642610465803 > .wpb_wrapper > p'
    textComplianceAndRegulation = '.vc_custom_1626883658045 > .wpb_wrapper > p'
    textModularPlatform = ':nth-child(15) > .clearfix.edgtf-section-inner > :nth-child(1) > .vc_hidden-md > :nth-child(1) > :nth-child(1) > :nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > span'
    textRegulatedMarkets = '.vc_hidden-md > :nth-child(1) > :nth-child(1) > :nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(2) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p'
    textPlayerRetention = ':nth-child(5) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(3) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p'
    textLandBasedToOnline = ':nth-child(15) > .clearfix.edgtf-section-inner > :nth-child(1) > .vc_hidden-md > :nth-child(1) > :nth-child(1) > :nth-child(7) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(1) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p'
    textSmartBackOffice = ':nth-child(7) > .edgtf-section-inner > .edgtf-section-inner-margin > :nth-child(2) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p'
    textGetInTouch = '.vc_hidden-md > :nth-child(1) > :nth-child(1) > .edgtf-elements-holder > [data-animation-delay="300"] > .edgtf-elements-holder-item-inner > .edgtf-elements-holder-item-content > .wpb_text_column > .wpb_wrapper > p > span'


    checkText(textName, textString){
        switch(textName) {
            case "textAbout01":
                cy.get(this.textAbout01).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textAbout02":
                cy.get(this.textAbout02).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textCertified":
                cy.get(this.textCertified).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textPlatform":
                cy.get(this.textPlatform).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textCRMAndGamefication":
                cy.get(this.textCRMAndGamefication).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textContentAnd3rdParties":
                cy.get(this.textContentAnd3rdParties).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textComplianceAndRegulation":
                cy.get(this.textComplianceAndRegulation).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textModularPlatform":
                cy.get(this.textModularPlatform).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textRegulatedMarkets":
                cy.get(this.textRegulatedMarkets).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;   
            case "textPlayerRetention":
                cy.get(this.textPlayerRetention).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textLandBasedToOnline":
                cy.get(this.textLandBasedToOnline).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textSmartBackOffice":
                cy.get(this.textSmartBackOffice).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;
            case "textGetInTouch":
                cy.get(this.textGetInTouch).invoke('text').then((text) =>{
                    expect(text).to.eq(textString)
                })
                break;     
        }
    }
}