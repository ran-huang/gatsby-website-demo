import * as React from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <p>后浪辩护人主页</p>

    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />