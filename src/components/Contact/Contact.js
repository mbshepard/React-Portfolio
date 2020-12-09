import React, { Fragment } from 'react';
import Header from '../Header/Header';


function Contact () {
    return(

    <Fragment>
      <Header />
        <section className="intro">
        <div className="inner">
            <div className="content">
                <h1>Contact</h1>\
                <a className="intro-btn" href="https://github.com/mbshepard">GitHub</a>
                <a className="intro-btn" href="https://www.linkedin.com/in/michael-shepard-0433b286/">LinkedIn</a>
                <a className="intro-btn" href="https://docs.google.com/document/d/1H88yY-wqILClEPmH51vj4A8oljmWSPk2HADnCXd2PrQ/edit">Resume</a>
            </div>
        </div>
        </section>
    </Fragment>
    )
}

export default Contact;