import React from 'react'
import './components.css'

function Footer() {
  return (
    <footer className='footer'>
      {/* Main Footer Content */}
      <div className='footerContent'>
        {/* Explore Section */}
        <div className='footerSection'>
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className='footerSection'>
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className='footerSection'>
          <h3>Stay Connected</h3>
          <div className='socialLinks'>
            <button className="socialButton" aria-label="Facebook">
              <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png' alt='Facebook' />
            </button>
            <button className="socialButton" aria-label="Instagram">
              <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png' alt='Instagram' />
            </button>
            <button className="socialButton" aria-label="YouTube">
              <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-1024.png' alt='YouTube' />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='footerBottom'>
        <div className='footerBrand'>
          <span>© 2025 DEV@DEAKIN</span>
        </div>
        <div className='footerLegal'>
          <button className="legalButton">Privacy Policy</button>
          <button className="legalButton">Terms</button>
          <button className="legalButton">Code of Conduct</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
