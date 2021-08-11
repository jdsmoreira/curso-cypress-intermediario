/// <reference types="cypress" />

const faker = require('faker')

describe('Create Project', () => {

  it('suecessfully', () => {
    const project = {
      name: `project-${faker.random.uuid()}`,
      description: faker.random.words(5)
    }

    cy.api_createProject(project)
      .then(response => {
				expect(response.status).to.eq(201)
				expect(response.body.name).to.eq(project.name)
				expect(response.body.description).to.eq(project.description)
			})
  })
})