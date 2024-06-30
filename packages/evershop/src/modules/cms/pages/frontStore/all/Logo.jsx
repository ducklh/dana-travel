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
          <img className="logo-icon-image" src={'https://firebasestorage.googleapis.com/v0/b/vku-graduation-project.appspot.com/o/logo.png?alt=media&token=34dffa3a-f00c-4b0b-a0f4-521f2daeece8'} alt={alt} width={width} height={height} />
        </a>
      )}
      {!src && (
        <a href="/" className="logo-icon">
          <img className="logo-icon-image" src={'https://firebasestorage.googleapis.com/v0/b/vku-graduation-project.appspot.com/o/logo.png?alt=media&token=34dffa3a-f00c-4b0b-a0f4-521f2daeece8'} alt={alt} width={width} height={height} />
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
