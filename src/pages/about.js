import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

export default () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>About</h1>
                <p>web dever and se</p>
                <Link to="/contact">Reach me!</Link>
            </Layout>
        </div>
    )
}