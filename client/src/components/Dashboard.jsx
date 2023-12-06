import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <Fragment>
            <section className="page dashboard_page">
                <div className="main">
                    <div className="content">
                        <h1 className="dashboard_title">ZooScapeXR</h1>
                        <p className="welnote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore consequuntur iusto, fugiat voluptatibus autem tempora corrupti nam error? Repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore consequuntur iusto, fugiat voluptatibus autem tempora corrupti nam error? Repellat.</p>
                    </div>
                    <div className="buttons">
                        <button className="btn">
                            <Link to={'/explore'}>Class Room</Link>
                        </button>
                        <button className="btn">
                            <Link to={'/explore'}>Explore</Link>
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Dashboard