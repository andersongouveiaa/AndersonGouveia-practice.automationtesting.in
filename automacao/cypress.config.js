const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://practice.automationtesting.in/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
