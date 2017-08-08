// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'pixel_quilt'
    }
  },

  production: {
    client: 'pg',
    connection:process.env.DATABASE_URL
  }
}
