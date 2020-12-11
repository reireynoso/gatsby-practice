import React from 'react';
import Layout from '../components/layout';
import {Link, useStaticQuery, graphql} from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

export default () => {
    // const data = useStaticQuery(graphql`
    // query {
    //     allMarkdownRemark {
    //       edges {
    //         node {
    //           fields {
    //             slug
    //           }
    //           frontmatter {
    //             title
    //             date
    //           }
    //           html
    //           excerpt
    //         }
    //       }
    //     }
    //   }
    // `)
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do YYYY")
          }
        }
      }  
    }
    `)
    return (
        <div>
            <Layout>
                <Head title="Blog"/>
                <h1>Blog</h1>
                <p>Posts will show up here later on.</p>
                <ol className={blogStyles.posts}>
                    {
                        data.allContentfulBlogPost.edges.map(edge => {
                            return (
                                <li className={blogStyles.post}>
                                    
                                    <Link to={`/blog/${edge.node.slug}`}>
                                      <h2>
                                        {edge.node.title}
                                      </h2>  
                                      <p>{edge.node.publishedDate}</p>
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