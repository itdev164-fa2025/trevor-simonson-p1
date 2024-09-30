import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';

const UnitGallery = ({data}) =>{
    console.log(data);
    const { title, submissions } = data.contentfulUnit;

    return(
        <Layout>
            <h1>{title}</h1>
        </Layout>
    )
}

export default UnitGallery

// Need to format image data
export const pageQuery = graphql`
    query unitQuery($slug: String!){
        contentfulUnit(slug: {eq: $slug}){
            title
            submissions{
                slug
                finalArtwork{gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 600
                )} 
            }
        }
    }
`