/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
                port: '',
                pathname: '/1/akormous/**'
            }
        ]
    }
}

module.exports = nextConfig
