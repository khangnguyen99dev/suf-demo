module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
      max_memory_restart: '1G',
      max_restarts: 10,
      node_args: '--max-old-space-size=1536'
    },
  ],
}; 