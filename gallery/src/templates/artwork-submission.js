import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';

const ArtworkSubmission = ({data}) =>{
    const { title, finalArtwork } = data.contentfulArtworkSubmission;

    return(
        <Layout>
            <h1>{title}</h1>
            <div>
                <GatsbyImage
                    image={finalArtwork.gatsbyImageData}
                />
            </div>
        </Layout>
    )
}

export default ArtworkSubmission

// Need to format image data
export const pageQuery = graphql`
    query artworkSubmissionQuery($slug: String!){
        contentfulArtworkSubmission(slug: {eq: $slug}){
            title
            finalArtwork{gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 600
            )} 
        }
    }
`