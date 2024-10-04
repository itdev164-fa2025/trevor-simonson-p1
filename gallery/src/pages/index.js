import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledList = styled.ul`
  list-style: none;
`
const StyledLink = styled(Link)`
  display: flex;
  color: blue;
  font-family: fantasy;
  font-size: xx-large;
  text-decoration: none;
`

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home"/>
    <h1>Unit Galleries</h1>
    <StyledList className={styles.list}>
      {
        data.allContentfulUnit.edges.map(edge =>(
          <li key={edge.node.id}>
            <StyledLink to={edge.node.slug}><GatsbyImage image={edge.node.unitImage.gatsbyImageData}/></StyledLink>
          </li>
        ))
      }
    </StyledList>
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
            unitImage{
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                height: 300
            )
            }
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