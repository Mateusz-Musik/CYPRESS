const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '96cdzv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
