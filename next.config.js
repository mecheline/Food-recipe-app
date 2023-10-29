/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  domains: {
    images: ["edamam-product-images.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
