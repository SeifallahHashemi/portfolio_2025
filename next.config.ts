import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://172.21.0.1:3000',
    'http://172.21.0.1',
    'http://localhost:3000',
  ],
};

export default nextConfig;
