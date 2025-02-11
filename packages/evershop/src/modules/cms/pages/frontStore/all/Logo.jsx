import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

export default function Logo({
  themeConfig: {
    logo: { src, alt = 'Evershop', width = '128px', height = '128px' }
  }
}) {
  return (
    <div className="logo">
      {src && (
        <a href="/" className="logo-icon">
          <img src={src} alt={alt} width={width} height={height} />
        </a>
      )}
      {!src && (
        <a href="/" className="logo-icon">
          <svg
            width="128"
            height="146"
            viewBox="0 0 128 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1307 2114 c-4 -4 -7 -40 -7 -81 l0 -73 50 0 c47 0 56 6 51 34 -1 4
1 17 4 27 6 17 17 19 95 19 78 0 89 -2 95 -19 3 -10 5 -23 4 -27 -5 -28 4 -34
51 -34 l51 0 -3 78 -3 77 -191 3 c-104 1 -193 -1 -197 -4z m76 -40 c13 -5 13
-10 -5 -40 -25 -43 -38 -43 -38 -1 0 45 10 54 43 41z m261 0 c17 -7 22 -59 7
-68 -5 -3 -18 12 -30 34 -21 41 -16 49 23 34z"/>
            <path d="M1320 1870 l0 -80 30 0 30 0 0 80 0 80 -30 0 -30 0 0 -80z" />
            <path d="M1620 1870 l0 -80 30 0 30 0 0 80 0 80 -30 0 -30 0 0 -80z" />
            <path d="M1195 1760 c-12 -14 -15 -56 -15 -239 0 -245 5 -272 59 -304 64 -37
110 -14 185 92 31 43 56 81 56 84 0 3 -30 8 -67 12 -38 3 -78 9 -91 12 l-23 5
22 24 c21 22 30 24 120 24 l97 0 51 70 c50 69 74 83 99 58 21 -21 13 -49 -33
-114 -43 -60 -45 -65 -32 -91 8 -16 24 -56 37 -90 20 -55 21 -67 10 -94 l-13
-31 -50 87 c-27 47 -50 85 -52 83 -1 -2 -32 -47 -68 -101 -71 -104 -79 -134
-53 -186 23 -44 53 -51 216 -51 137 0 150 2 160 19 6 13 10 147 10 369 0 313
-2 351 -17 363 -13 11 -76 14 -305 15 -255 0 -290 -1 -303 -16z m575 -40 c15
-24 12 -657 -3 -667 -19 -12 -220 -11 -258 1 -49 16 -60 55 -31 109 13 23 35
56 50 74 l28 32 42 -55 c23 -29 48 -54 56 -54 8 0 24 12 36 27 27 34 24 80
-10 169 l-24 61 38 57 c20 31 39 66 41 78 6 27 -29 84 -52 86 -59 6 -55 9
-130 -83 -33 -39 -33 -39 -124 -47 -81 -6 -95 -10 -120 -34 -16 -15 -29 -35
-29 -44 0 -26 31 -48 78 -56 23 -4 45 -10 47 -14 5 -8 -70 -109 -83 -112 -27
-5 -60 -4 -56 3 3 5 -2 9 -10 9 -30 0 -36 38 -36 247 0 154 3 212 13 222 9 9
73 11 270 9 216 -3 259 -5 267 -18z"/>
            <path d="M1287 972 c-24 -27 -21 -59 8 -78 23 -15 27 -15 50 0 30 20 33 56 7
79 -24 22 -45 21 -65 -1z"/>
            <path d="M1652 974 c-30 -21 -29 -59 3 -80 23 -15 27 -15 50 0 32 21 33 59 3
80 -12 9 -25 16 -28 16 -3 0 -16 -7 -28 -16z"/>
          </svg>
        </a>
      )}
    </div>
  );
}

Logo.propTypes = {
  themeConfig: PropTypes.shape({
    logo: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string
    })
  })
};

Logo.defaultProps = {
  themeConfig: {
    logo: {
      src: '',
      alt: 'Evershop',
      width: '128',
      height: '146'
    }
  }
};

export const layout = {
  areaId: 'header',
  sortOrder: 1
};

export const query = `
  query query {
    themeConfig {
      logo {
        src
        alt
        width
        height
      }
    }
  }
`;
