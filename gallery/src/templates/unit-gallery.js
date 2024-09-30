import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const UnitGallery = ({data}) =>{
    
    const { title, submissions } = data.contentfulUnit;
    console.log(submissions);
    return(
        <Layout>
            <h1>{title}</h1>
            <ul >
                { submissions &&
                    submissions.map(edge => (
                        
                        <li key={edge.slug}>
                            <Link to={`/${edge.slug}`}>                        
                                <GatsbyImage image={edge.finalArtwork.gatsbyImageData} alt=""/>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export default UnitGallery

// Need to format image data
export const pageQuery = graphql`
    query unitQuery($slug: String!){
        contentfulUnit(slug: {eq: $slug}){
            title
            slug
            submissions{
                slug
                finalArtwork{gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 300
                
                )} 
            }
        }
    }
`