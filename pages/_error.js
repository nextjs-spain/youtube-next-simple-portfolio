import Layout from "../components/Layout";

import React from 'react'

export default function _error({statusCode}) {
  return (
    <Layout>
        {
        statusCode ? (
            <p className="text-center"> Cold not load your page: {statusCode} </p>
        ) : (
            <p className="text-center"> Could not load your page </p>
        )
    
    }
    </Layout>    
  )
}
