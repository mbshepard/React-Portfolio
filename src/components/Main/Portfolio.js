import React, { Fragment } from 'react';
import Header from '../Header/Header';


function portfolio (){
  return (
    
    <Fragment>
      <Header />
        <section className="intro">
        <div className="inner">
            <div className="content">
                <h1>Projects</h1>

                <a className="intro-btn" href="https://teresam3.github.io/turbo-system/">Sports</a>
                <a className="intro-btn" href="https://murmuring-shore-74149.herokuapp.com/">Medic</a>
                <a className="intro-btn" href="https://tranquil-ocean-58611.herokuapp.com/">Music</a>
            </div>
        </div>
        </section>
    </Fragment>



  )
}
export default portfolio;