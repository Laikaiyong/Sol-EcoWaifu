/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUDDLE_API_KEY: process.env.HUDDLE_API_KEY,
  },
};

export default nextConfig;
