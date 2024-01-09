# Cypress_BDD_JavaScript

1. npm init -y
2. npm install cypress
3. npx cypress open - to open the test runners
    - End to End Testing
    - Chrome browser
    - scaffold example tests

4. npx cypress run -  to run the test in headless mode and run all the tests
5. script section:
        "scripts": {
            "open": "cypress open",
            "test-electron": "cypress run",
            "test-electron-headed": "cypress run --headed",
            "smoke-test": "cypress run --spec \"cypress/e2e/smokeTest/*.cy.js\"",
            "regression-test": "cypress run --spec \"cypress/e2e/regressionTest/*.cy.js\""
        }
6. 