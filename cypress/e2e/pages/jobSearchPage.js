export class JobSearchPage {

    searchbox = '.facetwp-search'
    searchIcon = '.facetwp-icon'
    listOfPositions = "[class='facetwp-template']"
    jobDetails = '.job_description'

    openJobSearchPage(url) {
        cy.visit(url)
    }

    searchByKeyword(keyword) {
        cy.get(this.searchbox).type(keyword)
        cy.get(this.searchIcon).click()
    }

    viewSinglePosition(position) {
        cy.get(this.listOfPositions).contains(position).click()
    }

    validationForJobDetails(text, assertion) {
        cy.get(this.jobDetails).contains(text).should('be.visible')
    }
}