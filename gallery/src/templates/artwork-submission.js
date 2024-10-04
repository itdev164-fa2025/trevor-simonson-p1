import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from "styled-components"
import * as styles from "../components/index.module.css"
const ArtworkSubmission = ({data}) =>{

    const { title, finalArtwork, unitExercises, artistName} = data.contentfulArtworkSubmission;

    const StyledDiv = styled.div`
        margin: 2rem;
    `; 
    const ExerciseList = styled.ul`
        list-style: none;
        object-fit: contain;
    `;

    const StyledH2 = styled.h2`
        font-size: 1.75rem;
        font-family: monospace;
        font-stretch: extra-expanded;
        color: white;
        display: block;
        background-color: cadetblue;
        border-radius: 25%;
        text-align: center;
        padding: 1rem;
        margin: 0;
    `

    return(
        <Layout>
            <h1>{title}</h1>
            <StyledDiv>
                <GatsbyImage
                    image={finalArtwork.gatsbyImageData}
                />
                <p>By {artistName}</p>
            </StyledDiv>
            <StyledDiv>
            <StyledH2>Exercises</StyledH2>
                <ExerciseList className={styles.list}>
                {
                   unitExercises.map(exercise =>(
                        <li >
                            <GatsbyImage image={exercise.gatsbyImageData}/>
                        </li>
                    )) 
                   
                }
                </ExerciseList>
            </StyledDiv>
        </Layout>
    )
}

export default ArtworkSubmission

// Need to format image data
export const pageQuery = graphql`
    query artworkSubmissionQuery($slug: String!){
        contentfulArtworkSubmission(slug: {eq: $slug}){
            title
            artistName
            finalArtwork{gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 1200
            )} 
            description{description}
            unitExercises{gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 400
            )}
        }
    }
`