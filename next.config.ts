import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const repo = 'Afro-event'; // Remplace par le nom de ton repo si besoin

const nextConfig: NextConfig = {
  output: 'export',
  // Si tu déploies sur une sous-arborescence, décommente la ligne suivante :
  // basePath: isGithubPages ? `/${repo}` : '',
  // assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default nextConfig;
