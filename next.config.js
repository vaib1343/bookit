/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DB_LOCAL_URI: 'mongodb+srv://vaib1343:1343@cluster0.nyght.mongodb.net/?retryWrites=true&w=majority',
        CLOUDINARY_CLOUD_NAME: 'dmgsaurar',
        CLOUDINARY_API_KEY: '356812392234265',
        CLOUDINARY_APISECRET: 'vwq9ExwW-A1qV2vw7cOn9ZC_Z4E',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

module.exports = nextConfig;
