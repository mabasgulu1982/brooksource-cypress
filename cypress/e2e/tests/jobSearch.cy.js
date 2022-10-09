import { JobSearchPage } from '../pages/jobSearchPage.js'

const jobSearchPage = new JobSearchPage()
describe('Job Search', () => {

  let jobs
  before(() => {
    cy.fixture('jobSearch.json').then((data) => {
      return jobs = data
    })
  })

  it('Search for job by keyword', () => {
    jobSearchPage.openJobSearchPage(jobs.jobSearchPageURL)
    jobSearchPage.searchByKeyword(jobs.tester)
    jobSearchPage.viewSinglePosition(jobs.position)
    jobSearchPage.validationForJobDetails(jobs.jobTitle)
    jobSearchPage.validationForJobDetails(jobs.manualQAJobSummery)
  })
})