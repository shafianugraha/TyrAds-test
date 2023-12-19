// next.config.js
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
  // Other Next.js config options can be added here...
};

module.exports = withPlugins([withFonts()], nextConfig);
