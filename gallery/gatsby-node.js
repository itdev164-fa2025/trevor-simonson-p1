const path = require('path');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
 // return new Promise((resolve, reject) =>{

  const art = await graphql(`
      {
        allContentfulArtworkSubmission{
        edges{
          node{
            slug
          }
        }
      }
    }
    `).then(result =>{

      if(result.errors){
        reject(result.errors);
      }

      result.data.allContentfulArtworkSubmission.edges.forEach((edge) =>
        createPage({
          path: edge.node.slug,
          component: require.resolve('./src/templates/artwork-submission.js'),
          context: {
            slug: edge.node.slug
          },
      }))})
      
    

  const unit = await graphql(`
    {
      allContentfulUnit {
        edges {
          node {
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
  `).then(result =>{
    if(result.errors){
      reject(result.errors);
    }

    result.data.allContentfulUnit.edges.forEach((edge) =>
      createPage({
        path: edge.node.slug,
        component: require.resolve('./src/templates/unit-gallery.js'),
        context: {
          slug: edge.node.slug
        },
      })
    )
    
  })


  }
//)}