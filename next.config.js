module.exports = {
  env: {
    APP_MODE: process.env.APP_MODE || 'Dev',
    PUBLIC_API_TOKEN:
      process.env.PUBLIC_API_TOKEN || '95D64240-428B-459C-B018-472D353F3904',
    REACT_APP_API_URI:
      process.env.REACT_APP_API_URI || 'http://localhost:8080/api',
    STRIPE_CLIENT_API_KEY:
      process.env.STRIPE_CLIENT_API_KEY ||
      'pk_test_51HuvEhLexm6rjU0KzK0gLQ4M5tG4wYcsqlABqaY9zNZKozyNuTWFnfALBNH9Gju4OBBhpb0bn4G3HmRwaKWKLYt300S5rKuoFT',
    FILE_STACK_API_KEY:
      process.env.FILE_STACK_API_KEY || 'AVBcc2TgTQqkAVpUyeHm4z',
  },
  experimental: {
    jsconfigPaths: true,
    granularChunks: true,
  },
};
