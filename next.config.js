/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出，用于 GitHub Pages
  output: 'export',
  // 所有页面以目录形式生成 index.html，GitHub Pages 友好
  trailingSlash: true,
  images: {
    // GitHub Pages 不支持 next/image 优化
    unoptimized: true
  }
}

module.exports = nextConfig
