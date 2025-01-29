const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')
const cyPostgres = require('cypress-postgres-10v-compatibility')
const os = require('os')

function getBaseUrls() {
  const env = process.env.NODE_ENV || 'prod'
  return {
    dev: {
      ui: '',
      api: '',
    },
    qa: {
      ui: '',
      api: '',
    },
    prod: {
      ui: 'https://front.serverest.dev',
      api: 'https://serverest.dev/',
    },
  }[env]
}

const baseUrls = getBaseUrls()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      let browserName = 'unknown'

      on('before:browser:launch', (browser = {}, launchOptions) => {
        browserName = browser.name
        return launchOptions
      })

      allureCypress(on, config, {
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          environment: env,
          browser: browserName,
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
