import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import Presentation from '../components/Presentation';
import About from '../components/About';
import Projects from '../components/Projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Presentation />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
