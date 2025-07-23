/**
 * Build Configuration
 * Frontend v2 Build Settings
 */

export const buildConfig = {
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Paths
  paths: {
    src: './src',
    dist: './dist',
    assets: './assets',
    styles: './styles',
    scripts: './utils',
    public: './'
  },
  
  // Asset optimization
  images: {
    quality: 85,
    formats: ['webp', 'jpg', 'png'],
    sizes: [400, 800, 1200, 1600]
  },
  
  // CSS processing
  css: {
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions']
    },
    minify: true,
    sourcemaps: true
  },
  
  // JavaScript processing
  js: {
    minify: true,
    sourcemaps: true,
    target: 'es2020'
  },
  
  // Development server
  devServer: {
    port: 3000,
    host: 'localhost',
    open: true,
    hot: true
  },
  
  // Performance
  performance: {
    maxAssetSize: 250000,
    maxEntrypointSize: 400000
  }
};