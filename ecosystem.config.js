module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/home/u595571863/domains/kane-service.shop/public_html/sinar-urban-facilities-demo',
      script: './node_modules/@strapi/strapi/bin/strapi.js',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
        HOST: '0.0.0.0',
        DATABASE_CLIENT: 'mysql',
        DATABASE_HOST: '127.0.0.1',
        DATABASE_PORT: '3306',
        DATABASE_NAME: 'u595571863_suf_demo',
        DATABASE_USERNAME: 'u595571863_suf_demo',
        DATABASE_PASSWORD: 'pk9*_cJLPt@3ShC',
        DATABASE_SSL: 'false'
      },
      max_memory_restart: '1G',
      max_restarts: 10,
      node_args: '--max-old-space-size=1536'
    },
  ],
}; 