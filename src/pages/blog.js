import React from 'react';
import Layout from '../components/layout';
import {Link, useStaticQuery, graphql} from 'gatsby';
import blogStyles from './blog.module.scss';

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
                <ol className={blogStyles.posts}>
                    {
                        data.allMarkdownRemark.edges.map(edge => {
                            return (
                                <li className={blogStyles.post}>
                                    
                                    <Link to={`/blog/${edge.node.fields.slug}`}>
                                      <h2>
                                        {edge.node.frontmatter.title}
                                      </h2>  
                                      <p>{edge.node.frontmatter.date}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ol>
            </Layout>
        </div>
    )
}