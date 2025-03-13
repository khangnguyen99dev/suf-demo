module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://sinar-urban-facilities-demo.kane-service.shop'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
