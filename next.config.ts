import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  ...(isProduction && {
    basePath: '/Afro-event',
    assetPrefix: '/Afro-event/',
  }),
};

export default nextConfig;
