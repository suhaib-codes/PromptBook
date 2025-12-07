/** @type {import('next').NextConfig} 
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["mongoose"], // ✅ updated from experimental.serverComponentsExternalPackages

  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'], // ✅ keep this for Google profile images and Cloudinary
  },

  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true, // ✅ allow top-level await
    };
    return config;
  },
};

module.exports = nextConfig;

