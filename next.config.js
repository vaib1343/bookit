/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DB_LOCAL_URI: 'mongodb+srv://vaib1343:1343@cluster0.nyght.mongodb.net/?retryWrites=true&w=majority',
        CLOUDINARY_CLOUD_NAME: 'dmgsaurar',
        CLOUDINARY_API_KEY: '356812392234265',
        CLOUDINARY_APISECRET: 'vwq9ExwW-A1qV2vw7cOn9ZC_Z4E',
        SMTP_HOST: 'smtp.mailtrap.io',
        SMTP_PORT: '2525',
        SMTP_USER: '020091f8fd0ca6',
        SMTP_PASS: 'a7294d137af240',
        SMTP_FROM_NAME:'Bookit',
        SMTP_FROM_EMAIL: 'noreply@bootkit.com',
        STRIPE_API_KEY:'pk_live_51L9jGFSJgzXB8D3o8sFkpSoLWGLjO7p1nCYUjQ8qkdnQOs9Pg0Gd5003kjNWGaWKcBsmINk6G6B7h5eTtcTOV4Tv00fBXwsIqL',
        STRIPE_SECRET_KEY: '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',
        STRIPE_WEBHOOK_SECRET: 'whsec_VNldn1kZxEJc1hYieeYYBP3rhkhKxbVL',
        NEXTAUTH_URL: 'https://bookit1343.vercel.app',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

module.exports = nextConfig;
