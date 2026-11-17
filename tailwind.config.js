const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/utils/font')

module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './themes/**/*.js'
  ],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }
      md: '720px',
      // => @media (min-width: 768px) { ... }
      lg: '960px',
      // => @media (min-width: 992px) { ... }
      xl: '1140px',
      // => @media (min-width: 1200px) { ... }
      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#fbfaf8'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#0e0d12'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        },
        // black: '#212b36',
        'dark-700': '#090e34b3',
        dark: {
          DEFAULT: '#111928',
          2: '#1F2A37',
          3: '#374151',
          4: '#4B5563',
          5: '#6B7280',
          6: '#9CA3AF',
          7: '#D1D5DB',
          8: '#E5E7EB'
        },
        primary: '#7c3aed',
        'blue-dark': '#6d28d9',
        secondary: '#13C296',
        // 将 HEO 主题的浅色强调色 indigo 重映射为 violet（呼应 auberginewly 的品牌紫）
        indigo: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065'
        },
        // HEO 深色模式强调色 yellow 重映射为 violet，统一双色为单色品牌紫
        yellow: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9'
        },
        'body-color': '#637381',
        'body-secondary': '#8899A8',
        warning: '#FBBF24',
        stroke: '#DFE4EA',
        'gray-1': '#F9FAFB',
        'gray-2': '#F3F4F6',
        'gray-7': '#CED4DA'
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%',
        'screen-3xl': '1440px',
        'screen-4xl': '1560px'
      },
      boxShadow: {
        input: '0px 7px 20px rgba(0, 0, 0, 0.03)',
        form: '0px 1px 55px -11px rgba(0, 0, 0, 0.01)',
        pricing: '0px 0px 40px 0px rgba(0, 0, 0, 0.08)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        testimonial: '0px 10px 20px 0px rgba(92, 115, 160, 0.07)',
        'testimonial-btn': '0px 8px 15px 0px rgba(72, 72, 138, 0.08)',
        1: '0px 1px 3px 0px rgba(166, 175, 195, 0.40)',
        2: '0px 5px 12px 0px rgba(0, 0, 0, 0.10)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
