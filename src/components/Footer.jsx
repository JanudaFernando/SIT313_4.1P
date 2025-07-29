import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='footerHead'>
        <div className='footer1'>
          <h1>Explore</h1>
          <h6>Home</h6>
          <h6>Questions</h6>
          <h6>Articles</h6>
          <h6>Tutorials</h6>
        </div>
        <div className='footer2'>
          <h1>Support</h1>
          <h6>FAQs</h6>
          <h6>Help</h6>
          <h6>Contact US</h6>
        </div>
        <div className='footer3'>
          <h1>Stay Connected</h1>
          <div className='socialMedia'>
            <img className='faceBook' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png' alt='faceBook' />
            <img className='instagram' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png' alt='Instagram' />
            <img className='youtube' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-1024.png' alt='youtube' />
          </div>
        </div>
      </div>
      <div className='dev'>
        <h1>DEV@DEAKIN 2025</h1>
        <div className='devLinks'>
          <h6>Privacy Policy</h6>
          <h6>Terms</h6>
          <h6>Code of Conduct</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
