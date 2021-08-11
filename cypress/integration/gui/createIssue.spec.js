/// <reference types="cypress" />

const faker = require('faker')

describe('Create Issue', () => {

  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }
console.log(issue.title)
  beforeEach(() => {
    cy.login()
    cy.api_createProject(issue.project)
  })
  it('sucessfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  });
})