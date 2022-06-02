/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    DB_LOCAL_URI: 'mongodb+srv://vaib1343:1343@cluster0.nyght.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
