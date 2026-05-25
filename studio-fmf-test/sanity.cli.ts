import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '36qubumz',
    dataset: 'production'
  },
  deployment: {
    appId: 'vzz8thgdknbewk63o1p90slp',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
