module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: {
            DEFAULT: "#9d235d"
          },
          purple: {
            DEFAULT: "#7839d6"
          },
          black: {
            DEFAULT: "#000000",
            900: "#070707",
            800: "#2b2b3b"
          }
        }
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        0.6: "0.15625rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.4: "0.8rem",
        3.5: "0.875rem",
        3.6: "18px",
        4: "1rem",
        5: "1.25rem",
        5.5: "21px",
        6: "1.5rem",
        6.5: "25px",
        7: "1.75rem",
        8: "2rem",
        8.5: "34px",
        9: "2.25rem",
        9.5: "38px",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        12.5: "3.125rem",
        12.6: "3.25rem",
        13: "3.375rem",
        14: "3.5rem",
        14.5: "60px",
        15: "3.875rem",
        16: "4rem",
        16.5: "65px",
        17: '4.5rem',
        18: "4.875rem",
        19: "77px",
        20: "5rem",
        21: "5.25rem",
        24: "6rem",
        24.5: "6.25rem",
        25: "6.5rem",
        26: "109px",
        28: "7rem",
        29: '7.5rem',
        32: "8rem",
        33: "8.75rem",
        36: "9.25rem",
        40: "10rem",
        43: "10.875rem",
        44: "11rem",
        45: '11.25rem',
        46: "11.75rem",
        48: "12rem",
        49: "12.5rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        73: "19rem",
        80: "20rem",
        82: "22rem",
        96: "24rem",
        97: "30rem",
        98: "34.125rem",
        99: "44rem",
        100: "48rem",
        110: "60rem",
        115: "75rem",
        120: "84rem",
        400: '400px',

      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        '4xl': '2.5rem',
        'full': '9999px',
        'large': '12px',
      },
      fontFamily: {
        "proxon": ["proxon"],
        "birosic": ["birosic"],
        "inter": ["inter"],
        "montserrat": ["Montserrat"]
      },
    },
  },
  plugins: [],
}