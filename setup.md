# Setup
- Install Gatsby locally with `npm install -g gatsby-cli`
- Fire up a Gatsby application with `gatsby new`. It accepts a few arguments: 1. project name 2. url to the starter code we want to use
- Gatsby has a few built in starters released by the Gatsby team.
- `gatsby new gatsby-bootcamp https://github.com/gatsbyjs/gatsby-starter-hello-world`
- Can start the application with `npm run develop`
- When creating new react components under the `pages` directory, to access it, it will be hrough the base URL, followed by the name of the file.
- Gatsby plugin for sass `npm install node-sass gatsby-plugin-sass`;
- `CSS Modules` make all class selectors in the module style sheeet locally scoped, means manually import and use them. Rename `scss` file to `something.module.scss`
- Built-in ways to setup dynamic data with Gatsby, site-metadata, object with key-value pairs.
- Open the `gatsby-config.js` file and add a new property, `siteMetadata`.
- To fetch data using Gatsby's GraphQL API, can head over to the dev `http://localhost:8000/___graphql`, in browser IDE for exploring GraphQL api.
- From a component, we import `graphql, useStaticQuery` from `gasby`
```js
const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `) // allows the string to be processed by the graphql function. Complex state tree
```
- `data.site.siteMetadata.title` to access a specific data
- For playground version of GraphiQL and env vars in Gatsby, Install `env-cmd` as dev dependency. Create `env.development` file
- Adjust `package.json` develop property, `"develop": "env-cmd .env.development gatsby develop"`
- Parse markdown files with `npm install gatsby-transformer-remark`
- Specific page for posts. Create `gatsby-node.js` to tap into node apis. `onCreateNode` new data on individual node.
- `createPages` plugin needed to dynamically create pages for the site in `gatsby-node`
- Set up a dynamic graphql query. Query needs to accept the slug and give back the data for the associated blog post.

- Handling pics on markdowns. `npm install gatsby-plugin-sharp`, allows us to use the sharp library inside of the gatsby site. `npm install gatsby-remark-images` allows us to usse images inside of markdown. `npm install gatsby-remark-relative-images`, allows us to source images relative to the source file.
- Go to `gatsby-config` file and adjust

- Hook gatsby with contentful, create an account. Use contentful as a webapp to manage our site content. We have content models and individual content themselves