import React from "react"
import {Link} from 'gatsby';
import Layout from '../components/layout'

export default () => {
  return (
    <div>
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Rei, a full stack dev and software enginer</h2>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      </Layout>

    </div>
  )
}
