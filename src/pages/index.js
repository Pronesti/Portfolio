import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Personal Information
          </h2>
          <p>
            Location: Buenos Aires, Argentina<br />
          </p>
          <ul className="features">
          <li className="icon solid fa-code">
           <h3>Backend</h3>
           <div className='customList'>
              <span>Laravel</span>
              <span>Slim</span>
              <span>Phalcon</span>
              <span>ExpressJS</span>
           </div>
          </li>
          <li className="icon solid fa-code">
           <h3>Frontend</h3>
           <div className='customList'>
              <span>VueJS</span>
              <span>ReactJS</span>
              <span>WordPress</span>
           </div>
          </li>
          <li className="icon solid fa-code">
           <h3>Databases</h3>
           <div className='customList'>
              <span>Mysql</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>Firebase</span>
           </div>
          </li>
          <li className="icon solid fa-code">
           <h3>OTHER</h3>
           <div className='customList'>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>TailwindCSS</span>
           </div>
          </li>
        </ul>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image pwa">
          <iframe title='movies' src="https://movies.diegopronesti.com.ar" width="360" height="640"/>
          <iframe title='blackjack' src="https://blackjack.diegopronesti.com.ar" width="360" height="640"/>
        </div>
        <div className="content">
          <h2>
            Progressive web apps:
          </h2>
          <p>
            Made with React.JS and Material UI
            <hr />
            <ul className="actions stacked">
            <li><a href="https://movies.diegopronesti.com.ar">Movies App</a></li>
            <li><a href="https://blackjack.diegopronesti.com.ar">Blackjack App</a></li>
            </ul>
          </p>
        </div>
      </section>
      <section className="wrapper">
        <div className="center-text">
          <h2>
            Full Stack
            <br />
            Applications
          </h2>
          <p>
            Laravel & VueJs or NodeJs & ReactJs
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Projects:</h2>
          <p>
            You can find more on my GitHub profile
            <br />
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
          <a href='https://github.com/Pronesti/templateEngine'>
           <h3>Template Engine</h3>
            <p>
              My own yet basic approach for a template engine commonly found in frameworks.
            </p>
          </a>
          </li>
          <li className="icon solid fa-map">
            <a href='https://github.com/Pronesti/aeroterra'>
              <h3>Aeroerra</h3>
            <p>
             Working on google maps, this app allows you to create markers with extra information.
            </p>
            </a>
            <a href="https://aeroterra.diegopronesti.com.ar" className="button fit primary">
              Show Live Preview
            </a>
          </li>
          <li className="icon brands fa-instagram">
            <a href='https://github.com/Pronesti/AltaFoto'>
            <h3>AltaFoto</h3>
            <p>
              A basic instagram clone built in React and Firebase.
            </p>
            </a>
            <a href="https://altafoto.diegopronesti.com.ar" className="button fit primary">
              Show Live Preview
            </a>
          </li>
          <li className="icon brands fa-twitter">
            <a href='https://github.com/Pronesti/react_tuiter_client'>
            <h3>React Tuiter Client</h3>
            <p>
              Copying twitters ui in ReactJS.
            </p>
            </a>
            <a href="https://basictuiter.diegopronesti.com.ar" className="button fit primary">
              Show Live Preview
            </a>
          </li>
          <li className="icon solid fa-code">
            <a href='https://github.com/Pronesti/phalcon-rest-api'>
            <h3>Phalcon Rest API</h3>
            <p>
              Rest API template in PHP's framework Phalcon with Docker & Docker-Compose.
            </p>
            </a>
          </li>
          <li className="icon solid fa-code">
          <a href='https://github.com/Pronesti/mern-boilerplate'>
            <h3>MERN Stack</h3>
            <p>
              MongoDB, Express, React and Node boilerplate.
            </p>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header className="center-text-y">
          <h2>Curriculum Vitae</h2>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="https://drive.google.com/file/d/1P84-KYruc4op7JAV62ivikbGBIc3U1Kb/view?usp=sharing" className="button fit primary">
              Show CV
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1P84-KYruc4op7JAV62ivikbGBIc3U1Kb" className="button fit">
             Download
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
