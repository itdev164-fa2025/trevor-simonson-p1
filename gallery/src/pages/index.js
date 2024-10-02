import * as React from "react"
import { graphql, Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home"/>
    <h1>Units</h1>
    <ul className={styles.list}>
      {
        data.allContentfulUnit.edges.map(edge =>(
          <li key={edge.node.id}>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
          </li>
        ))
      }
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

// Image data imported to experiment with some kind of transitioning gallery
export const query = graphql`
    {
      allContentfulUnit {
        edges {
          node {
            id
            title
            slug
            submissions {
              slug
              finalArtwork {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
`