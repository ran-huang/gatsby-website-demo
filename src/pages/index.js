import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Hanabi"
        src="https://images.unsplash.com/photo-1613123661975-6c1bd58134bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1282&q=80"
      />
      <StaticImage
      alt="tokyo"
      src="../images/tokyo.jpg"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />