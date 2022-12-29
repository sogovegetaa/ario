/** @type {import('next').NextConfig} */
const {i18n}=require('./next-i18next.config')
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['arioapi.pythonanywhere.com'],
  },
  i18n,
  
}


