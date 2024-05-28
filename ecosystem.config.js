const path = require('path');

module.exports = {
  apps: [
    {
      name: 'astayHome',
      // script: 'npm run start',
      script: 'node_modules/next/dist/bin/next', // https://github.com/Unitech/pm2/issues/5300
      args: 'start', // problem with "npm run start"
      cwd: path.join(__dirname, ''),
      out_file: path.join(__dirname, '../APP_LOGS/out.log'),
      error_file: path.join(__dirname, '../APP_LOGS/error.log'),
      merge_logs: true,
      log_date_format: 'DD-MM HH:mm:ss Z',
      //      log_type: 'json',
      exec_mode: 'cluster_mode',
      // Env Specific Config
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
