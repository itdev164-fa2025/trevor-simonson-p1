import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from "styled-components"
import * as styles from "../components/index.module.css"
import { Link } from "gatsby"

    const HeadDiv = styled.div`
        justify-content: space-between;
        display: flex;
        align-items: center;
        margin: 0;
    `;

    const BackButton = styled.button`
        font-size: 1.15rem;
        font-weight: bold;
        background: transparent;
        border-radius: 3px;
        border: 4px solid cadetblue;
        color: '#BF4F74';
        margin: 0 1em;
        padding: 0.5em 1em;
        &:hover{
            translate: -.5px -.5px;
        }
        &:hover:active{
            translate: 1px 1px;
        }
    `;

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

        text-align: center;
        padding: 1rem;
        margin: 0;
    `
const ArtworkSubmission = ({data}) =>{

    const { title, finalArtwork, unitExercises, artistName, unit} = data.contentfulArtworkSubmission;


    console.log();
    // ${unit[0].slug} 
    return(
        <Layout>
            <HeadDiv>
                <h1>{title}</h1>
                <Link to={`/${unit.slug}`}>                       
                    <BackButton>Back to Gallery</BackButton>
                </Link>
            </HeadDiv>
            
            <StyledDiv>
                <GatsbyImage
                    image={finalArtwork.gatsbyImageData}
                />
                <p>By {artistName}</p>
            </StyledDiv>
            <StyledDiv>
            <StyledH2>Unit Exercises</StyledH2>
                <ExerciseList className={styles.list}>
                { unitExercises &&
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
            unit{slug}
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