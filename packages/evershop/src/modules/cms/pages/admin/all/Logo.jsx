import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

export default function Logo({ dashboardUrl }) {
  return (
    <div className="logo">
      <a href={dashboardUrl} className="flex items-end">
      {/* <img className="logo-icon-image" src={'https://firebasestorage.googleapis.com/v0/b/vku-graduation-project.appspot.com/o/logo.png?alt=media&token=34dffa3a-f00c-4b0b-a0f4-521f2daeece8'} /> */}

        <span className="font-bold">DANA TRAVEL</span>
      </a>
    </div>
  );
}

Logo.propTypes = {
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query Query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;
