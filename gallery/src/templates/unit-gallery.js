import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import styled from 'styled-components';

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

const UnitGallery = ({data}) =>{
    const GalleryList = styled.ul`
        list-style: none;
    `


    const { title, submissions, slug } = data.contentfulUnit;
    console.log(submissions);
    return(
        <Layout>
            <HeadDiv>
                <h1>{title}</h1>
                <Link to={`/`}>                        
                    <BackButton>Back to Units</BackButton>
                </Link>
            </HeadDiv>
            <GalleryList className={styles.list}>
                { submissions &&
                    submissions.map(edge => (
                        
                        <li key={edge.slug}>
                            <Link to={`/${edge.slug}`}>                        
                                <GatsbyImage image={edge.finalArtwork.gatsbyImageData} alt=""/>
                            </Link>
                        </li>
                    ))
                }
            </GalleryList>
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