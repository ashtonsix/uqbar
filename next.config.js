const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'page.mdx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /(\.toml|\.uq)$/,
      use: 'raw-loader',
    })

    return config
  },
})
