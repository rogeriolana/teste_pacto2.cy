const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa plugins, se necessário

    },
    chromeWebSecurity: false ,
    pageLoadTimeout: 60000,

  },
});