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
        STRIPE_API_KEY:'pk_test_51L9jGFSJgzXB8D3ohws3JNayyJVltUYMab0wPk6V5tAnV0nTtWGQc15A58sALnMuF6u1HiL3WzsMTuaQtAH1eog000vocqnRV5',
        STRIPE_SECRET_KEY: 'sk_test_51L9jGFSJgzXB8D3oerRMLgnbUhCiPpuLOsQKQnQLOgLmRgSyvVrKAe76V2KxKZVO4nEjnUuj5C23vlyIyCHh8Wsr00uvulppEV',
        STRIPE_WEBHOOK_SECRET: 'whsec_0ee57555c53a9f323c1962a11ec2d5280c0bb1c90d2f499f2bb27c11980a3f58'
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

module.exports = nextConfig;
