/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [], // add shared package path if using monorepo tooling
  compiler: {
    styledComponents: false,
  },
}

module.exports = nextConfig
