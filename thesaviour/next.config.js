/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:  ['ipfs.infura.io', 'bing.com', 'crowd-funding.infura-ipfs.io','encrypted-tbn0.gstatic.com']
   }
}

module.exports = nextConfig