const path = require('path');

module.exports.onCreateNode = ({node,actions}) => {
    const {createNodeField} = actions;

    if(node.internal.type === "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log(JSON.stringify(node, undefined, 4))
        // console.log('@@@@@@@', slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions
    // 1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // 2. get markdown data 
    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
    // 3. create new pages
}