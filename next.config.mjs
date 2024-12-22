/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的ファイルの生成を有効化
  trailingSlash: true,
  images: {
    unoptimized: true, // 画像最適化を無効化（静的ファイル向け）
  },
};

export default nextConfig;
