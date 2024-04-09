describe('The Home Page', () => {
  before(() => {
    cy.mhDeleteAll()
  })

  it('should send  magic link', () => {
    cy.visit('/')
    cy.get("[id=icon]").click().get("[id=signin]").click()
    cy.get("#email").type("cano_alejandro97@hotmail.com")
    cy.get("#submit1").click()
    cy.visit("http://localhost:8025")
  })

  it('should redirect to portal', () => {
    cy.mhDeleteAll()
    cy.visit('/')
    cy.get("[id=icon]").click().get("[id=signin]").click()
    cy.get("#email").type('cano_alejandro97@hotmail.com')
    cy.get("#submit1").click()
    cy.mhGetMailsBySubject('Sign in to localhost:3000').should(
      'have.length',
      1,
    )

  })
})






// it('should send magic link', () => {
//   cy.visit('/auth/signin')
//   cy.get("#email").type('cano_alejandro97@hotmail.com')
//   cy.get("#submit1").click()
//   cy.visit("http://localhost:8025")
// })


// cy
//   .visit("http://localhost:8025")
//   .mhGetAllMails()


// Send an email using the SMTP settings from cypress.json
//   cy.request({
//     method: 'post',
//     url: `http://localhost:8025/api/v2/messages?limit=50`,
//     body: {
//       to: 'recipient@example.com',
//       from: 'sender@example.com',
//       subject: 'Test Email',
//       text: 'This is a test email sent from Cypress.'
//     }
//   });

//   // Visit MailHog's web UI
//   cy.visit('http://localhost:8025');

//   // Check if the email is captured by MailHog
//   cy.contains('Test Email').should('exist');


