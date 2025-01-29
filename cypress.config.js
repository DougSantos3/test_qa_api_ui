const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')
const cyPostgres = require('cypress-postgres-10v-compatibility')
const os = require('os')

const env = process.env.NODE_ENV || 'qa'

function getBaseUrls() {
  return {
    dev: {
      ui: '',
      api: '',
    },
    qa: {
      ui: 'https://front.serverest.dev',
      api: 'https://serverest.dev/',
    },
    prod: {
      ui: '',
      api: '',
    },
  }[env]
}

const baseUrls = getBaseUrls()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      /* Todo: Today it works only with Electron. I need to understand why it works with 
      Chrome and Edge without breaking in the second scenario, but it executes the third one, 
      and Firefox breaks in the second for the full test execution. Also, why doesn't the 
      browser appear in the Allure report?
      
      let browserName = 'unknown'

      on('before:browser:launch', (browser = {}, launchOptions) => {
        browserName = browser.name
        return launchOptions
      })  */

      allureCypress(on, config, {
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          environment: env,
          /* browser: browserName, */
        },
      })

      on('task', {
        dbQuery: (query) => cyPostgres(query.query, query.connection),
      })

      return config
    },
    baseUrl: baseUrls.api,
    env: {
      baseUrlFront: baseUrls.ui,
    },
    video: true,
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },

  fixturesFolder: false,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
