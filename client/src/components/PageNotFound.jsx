import React, { Fragment } from 'react'
import Header from './Header'

function PageNotFound() {
  return (
    <Fragment>
        <Header />
        <section className="page page_not_found_page">
            <div className="content">
                <h1 className="title">404</h1>
                <p>Page Not Found</p>
            </div>
        </section>
    </Fragment>
  )
}

export default PageNotFound