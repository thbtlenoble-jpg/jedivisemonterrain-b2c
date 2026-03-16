const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: [
      './components/*.vue',
      './components/**/*.vue',
      './layouts/*.vue',
      './pages/*.vue',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        outline: '0 0 0 8px rgba(0, 185, 180, 0.25)',
        spec: '0 20px 25px -5px rgba(0,0,0,0.03), 0 10px 10px -5px rgba(0,0,0,0.01)',
      },
      inset: { 100: '100%' },
      fontSize: {
        'h1-xl': ['70px', '70px'], 'h2-xl': ['60px', '60px'],
        'h3-xl': ['22px', '30px'], 'h4-xl': ['16px', '30px'],
        'p-xl':  ['20px', '30px'], 'span-xl': ['15px', '22px'],
        'h1-lg': ['45px', '48px'], 'h2-lg': ['35px', '35px'],
        'h3-lg': ['18px', '21px'], 'h4-lg': ['13px', '16px'],
        'p-lg':  ['14px', '20px'], 'span-lg': ['11px', '16px'],
        'h1-md': ['50px', '52px'], 'h2-md': ['40px', '40px'],
        'h3-md': ['17px', '20px'], 'h4-md': ['11px', '14px'],
        'p-md':  ['18px', '26px'], 'span-md': ['13px', '18px'],
        'h1-sm': ['26px', '28px'], 'h2-sm': ['20px', '24px'],
        'h3-sm': ['15px', '18px'], 'h4-sm': ['10px', '13px'],
        'p-sm':  ['12px', '18px'], 'span-sm': ['12px', '14px'],
        'input-sm': ['9px', '14px'], 'button-sm': ['8px', '12px'],
        'button-md': ['10px', '14px'], 'icon-lead': ['10px', '21px'],
      },
      screens: { sm: '320px', md: '768px', lg: '1024px', xl: '1400px' },
      colors: {
        grey01: '#F4F7FA', grey02: '#D8DDE2', grey03: '#C7CDD2',
        grey04: '#AEBBC0', grey05: '#767A91', grey06: '#3D4051',
        grey07: '#272A3A', grey08: '#161615',
        yellow01: '#FFEF4D', yellow02: '#FFE800', yellow03: '#FFBB00', yellow04: '#DFA400',
        blue00: '#B5EBE9', blue01: '#00B9B4', blue02: '#0CA4A4', blue03: '#0F7A79',
        success: '#65CB00',
        agence: '#E85D00', geometre: '#9D68D9', architecte: '#FFAD4D',
        constructeur: '#FFE920', promoteur: '#90D960', lotisseur: '#60C8D9',
        vrd: '#3CDB81', huissier: '#AEBBC0', blackOpacity20: '#00000033',
      },
      borderWidth: { 6: '6px', 3: '3px', 1: '1px' },
      spacing: { '1px': '1px' },
      padding: {
        'division-sm': '70%', 'division-md': '50%', 'top-experts': '45%',
        'screen-xl': 'calc(100vh - 89px)', 'screen-lg': 'calc(100vh - 73px)',
      },
      height: {
        'screen-xl': 'calc(100vh - 89px)',
        'screen-lg': 'calc(100vh - 73px)',
        300: '300px',
      },
      width: {
        'screen-divide-lg': 'calc(1024px / 2)',
        'screen-divide-xl': 'calc(1400px / 2)',
        '5/11': '45.4545%',
      },
      backgroundSize: { 100: '100%', 150: '150%' },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
}
