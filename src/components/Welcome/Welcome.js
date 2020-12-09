import {Fragment} from 'react'
import Header from '../Header/Header'
import './Welcome.css'
export default function Welcome(){
    return(
        <Fragment>
        <Header />
        <section className="intro">
        <div className="inner">
            <div className="content">
                <h1>Michael</h1>
                <h1>Shepard</h1>
                <a className="intro-btn" href="/portfolio">Portfolio</a>
            </div>
        </div>
        </section>
        </Fragment>
    )
}