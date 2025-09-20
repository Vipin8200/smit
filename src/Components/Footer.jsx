import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/smit_logo.png';
import '../assets/css/Main.css'


const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setIsError(true);
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    setIsLoading(true);
    setIsError(false);
    setIsSent(false);
    
    // This simulates an API call to your newsletter service
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setEmail('');
      
      // Reset the success message after some time
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 1500);
  };

  return (
    <footer id="footer" className="footer">
      {/* <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <input type="submit" value="Subscribe" />
                </div>
                {isLoading && <div className="loading">Loading</div>}
                {isError && <div className="error-message">{errorMessage}</div>}
                {isSent && <div className="sent-message">Your subscription request has been sent. Thank you!</div>}
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="d-flex align-items-center">
              <img src={logo} alt=""  style={{width : 150}} />
              {/* <span className="sitename">DevSquad</span> */}
            </Link>
            <div className="footer-contact pt-3">
              {/* <p>A108 Adam Street</p>
              <p>New York, NY 535022</p> */}
              <p className="mt-3"><strong>Phone:</strong> <span>+91 72270 95393</span></p>
              <p><strong>Email:</strong> <span>info@karmelinfotech.com</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services">Services</Link></li>
              {/* <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Portfolio</Link></li> */}
              <li><i className="bi bi-chevron-right"></i> <Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services">Ui/UX</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services">Graphics Designing</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services">Web Design</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services">Web Development</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services">More Services Checkout</Link></li>
              {/* <li><i className="bi bi-chevron-right"></i> <Link to="/services/custom-software-development">Custom Software Development</Link></li> */}
              {/* <li><i className="bi bi-chevron-right"></i> <Link to="/services/mobile-app-development">Mobile App Development</Link></li> */}
              {/* <li><i className="bi bi-chevron-right"></i> <Link to="/services/it-consulting">IT Consulting</Link></li> */}
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <p>Follow us on social media for latest updates and news!</p>
            <div className="social-links d-flex">
              <a href="https://www.instagram.com/karmelinfotechllp/?hl=en" target='_blank' rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/company/karmel-infotech-and-software-solution-llp/"target='_blank' rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
       <p>
          © <span>Copyright</span> <strong className="px-1 sitename">2025 Karmel Infotech And Software Solutions</strong>
          <span>All Rights Reserved</span>
        </p>

        {/* <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a> Distributed by <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;