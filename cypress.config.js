import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
      baseUrl: 'http://localhost:5400',
    env: {
      apiUrl: 'http://localhost:8400'
    }
  }
})