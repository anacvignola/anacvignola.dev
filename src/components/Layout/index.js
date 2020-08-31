import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import GlobalStyles from '../../styles/global';
import { LayoutWrapper, LayoutMain } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Header />
      <LayoutMain>
        <main>{children}</main>
      </LayoutMain>
      <Footer />
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
