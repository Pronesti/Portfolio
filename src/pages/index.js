import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
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
            Technologies:
            <br />
           HTML5, CSS, JavaScript, React.JS, ExpressJS, MongoDB, Firebase, PHP, MYSQL, Java 
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label"></span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label"></span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label"></span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image pwa">
          <iframe src="https://blackjack.diegopronesti.com.ar" width="360" height="640"/>
          <iframe src="https://swipper.diegopronesti.com.ar" width="360" height="640"/>
        </div>
        <div className="content">
          <h2>
            Progressive web apps:
          </h2>
          <p>
            Made with React.JS and Material UI
            <hr />
            <ul className="actions stacked">
            <li><a href="movies.diegopronesti.com.ar">Movies App</a></li>
            <li><a href="blackjack.diegopronesti.com.ar">Blackjack App</a></li>
            <li><a href="swipper.diegopronesti.com.ar">Dating App</a></li>
            </ul>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Full Stack&nbsp;
            <br />
            Applications 
          </h2>
          <p>
            With ExpressJS and MongoDB for the backend.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <section className="content">
					<h4>Contact</h4>
					<form method="post" action="#">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							<div className="col-12">
								<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
									<li><input type="reset" value="Reset" /></li>
								</ul>
							</div>
						</div>
					</form>
				</section>
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
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Curriculum Vitae</h2>
          <p>
            See my curriculum or download it.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="https://drive.google.com/file/d/11gZ8PRReNh_0_nH4u8_cHAc2FKbjsIsE/view?usp=sharing" className="button fit primary">
              Show CV
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=11gZ8PRReNh_0_nH4u8_cHAc2FKbjsIsE" className="button fit">
             Download
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
