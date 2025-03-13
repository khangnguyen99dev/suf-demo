module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/home/u595571863/domains/kane-service.shop/public_html/sinar-urban-facilities-demo',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 1337
      },
      max_memory_restart: '1G',
      max_restarts: 10,
      node_args: '--max-old-space-size=1536'
    },
  ],
}; 