module.exports = {
  apps: [
    {
      name: 'rr7',
      exec_mode: 'cluster',
      instances: 2,
      script: 'npm',
      args: 'start',
      watch: false,
      autorestart: true,
      max_memory_restart: '1G',
      node_args: '--harmony',
    },
  ],
}
