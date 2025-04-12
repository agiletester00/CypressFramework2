const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

const mysql = require("mysql");
const { da } = require("@faker-js/faker");


async function setupNodeEvents(on, config) {
  // require('cypress-mochawesome-reporter/plugin')(on);
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Usage: cy.task('queryDb', query)
  on("task", {
    queryDb: query => {
      return queryTestDb(query, config);
    }
  });
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}




module.exports = defineConfig({
  // Usage: cy.task('queryDb', query)
  
  projectId: "bsxp5t",
  env :{
    url : "https://rahulshettyacademy.com",
    db:{
      // server: "127.0.0.1",
      host: "localhost",
      user: "root",
      password: "root",
      database: "sakila",      

      }
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    specPattern : "cypress/integration/examples/BDD/*.feature"
    //  specPattern : "cypress/integration/examples/*.js"

     //E:\CypressAuto\cypress\integration\examples
  },
});

//DB related code
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
        
      }
    });
  });
}

