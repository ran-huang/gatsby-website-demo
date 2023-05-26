import * as React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Houlang">
      <p>Hi there! We're a group of professional lawyers that help people.</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="About Houlang" />