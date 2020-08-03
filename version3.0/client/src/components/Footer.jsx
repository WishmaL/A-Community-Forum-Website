import React from 'react';
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, totam beatae! Modi voluptatum voluptates distinctio. Aut iure eaque vero delectus.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">Link 1</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  Link 2
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  Link 3
                </a>
              </li>
              
               
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text ">
              Copyright &copy; 2017 All Rights Reserved by
              <a href="#"> LEARN</a>.
            </p>
          </div>

         {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
               <li>
                <a className="facebook" href="#">
                <FontAwesomeIcon icon={'f09a'} />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li> 
            </ul>
          </div>*/}
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
