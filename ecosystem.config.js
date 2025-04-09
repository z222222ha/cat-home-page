require("dotenv").config(); // 读取 .env

module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: process.env.ALIYUN_KNOWN_HOSTS,
      ref: "origin/master",
      repo: process.env.GIT_REPO_URL,
      path: "/var/www/wwwroot/cat-home-page",
      "post-deploy":
        "pnpm install && pnpm run build && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
