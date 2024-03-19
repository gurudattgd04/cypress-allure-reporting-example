const { defineConfig } = require("cypress")
const { allureCypress } = require("allure-cypress/reporter")
const cypressSplit = require("cypress-split")

module.exports = defineConfig({
  retries: 2,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on)
      cypressSplit(on, config)
      return config
    }
  }
})
