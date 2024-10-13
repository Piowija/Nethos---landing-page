import React from 'react';

import { AppHeader } from './AppHeader';

import './styles/layout.css';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  return <AppHeader />;
};
