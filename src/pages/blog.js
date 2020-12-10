import React from 'react';
import Layout from '../components/layout';
import {Link, useStaticQuery, graphql} from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
              html
              excerpt
            }
          }
        }
      }
    `)
    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <p>Posts will show up here later on.</p>
                <ol>
                    {
                        data.allMarkdownRemark.edges.map(edge => {
                            return (
                                <li>
                                    <h2>
                                    <Link to={`/blog/${edge.node.fields.slug}`}>
                                      {edge.node.frontmatter.title}
                                    </Link>
                                    </h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </li>
                            )
                        })
                    }
                </ol>
            </Layout>
        </div>
    )
}