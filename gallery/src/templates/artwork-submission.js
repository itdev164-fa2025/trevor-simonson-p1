import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';

/**************************************************************************** 
// Tried updating exercise field ID but the app doesn't recognize the change.
*****************************************************************************/
const ArtworkSubmission = ({data}) =>{

    const { title, finalArtwork, unitExercises } = data.contentfulArtworkSubmission;

    return(
        <Layout>
            <h1>{title}</h1>
            <div>
                <GatsbyImage
                    image={finalArtwork.gatsbyImageData}
                />
            </div>
            <div>
                <ul>
                {
                   unitExercises.map(exercise =>(
                        <li >
                            <GatsbyImage image={exercise.gatsbyImageData}/>
                        </li>
                    )

                   ) 
                   
                }
                </ul>
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
            description{description}
            unitExercises{gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                height: 400
            )}
        }
    }
`