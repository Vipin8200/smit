import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/image/smit_logo.png';
// import logo from '../assets/img/Devsquad_5.png';
// import logo from '../assets/img/smit_logo.png';
import '../assets/css/Main.css'

const Header = () => {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // const toggleDropdown = (dropdownName) => {
  //   setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  // };

  useEffect(() => {
    setIsMobileNavOpen(false);
    // setActiveDropdown(null);
  }, [location.pathname]);

  // Add/remove mobile-nav-active class to body and prevent scrolling
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-nav-active');
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-nav-active');
      document.body.style.overflow = 'unset';
    };
  }, [isMobileNavOpen]);

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
    // setActiveDropdown(null);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <div className="d-flex align-items-center">
          {/* <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} me-3`}
            onClick={toggleMobileNav}
          ></i> */}
          <Link to="/" className="logo d-flex align-items-center" onClick={handleLinkClick}>
            <img src={logo} alt="FlexStart Logo" />
            {/* <h1 className="sitename">DevSquad</h1> */}
          </Link>
        </div>

        <nav id="navmenu" className="navmenu ms-auto">
          <ul>
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''} onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={handleLinkClick}>Services</Link>
            </li>
            <li>
              {/* <Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''} onClick={handleLinkClick}>Portfolio</Link> */}
            </li>
            <li>
              {/* <Link to="/career" className={isActive('/career') ? 'active' : ''} onClick={handleLinkClick}>Career</Link> */}
            </li>
            {/* <li>
              <Link to="/team" className={isActive('/team') ? 'active' : ''} onClick={handleLinkClick}>Team</Link>
            </li> */}
            
            {/* <li className="dropdown">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('main-dropdown');
                }}
              >
                <span>Dropdown</span> 
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={activeDropdown === 'main-dropdown' ? 'dropdown-active' : ''}>
                <li><Link to="/dropdown-1" onClick={handleLinkClick}>Dropdown 1</Link></li>
                <li className="dropdown">
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown('deep-dropdown');
                    }}
                  >
                    <span>Deep Dropdown</span> 
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul className={activeDropdown === 'deep-dropdown' ? 'dropdown-active' : ''}>
                    <li><Link to="/deep-dropdown-1" onClick={handleLinkClick}>Deep Dropdown 1</Link></li>
                    <li><Link to="/deep-dropdown-2" onClick={handleLinkClick}>Deep Dropdown 2</Link></li>
                    <li><Link to="/deep-dropdown-3" onClick={handleLinkClick}>Deep Dropdown 3</Link></li>
                    <li><Link to="/deep-dropdown-4" onClick={handleLinkClick}>Deep Dropdown 4</Link></li>
                    <li><Link to="/deep-dropdown-5" onClick={handleLinkClick}>Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="/dropdown-2" onClick={handleLinkClick}>Dropdown 2</Link></li>
                <li><Link to="/dropdown-3" onClick={handleLinkClick}>Dropdown 3</Link></li>
                <li><Link to="/dropdown-4" onClick={handleLinkClick}>Dropdown 4</Link></li>
              </ul>
            </li>
            
            <li className="listing-dropdown dropdown">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('listing-dropdown');
                }}
              >
                <span>Listing Dropdown</span> 
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={activeDropdown === 'listing-dropdown' ? 'dropdown-active' : ''}>
                <li>
                  <Link to="/column-1-link-1" onClick={handleLinkClick}>Column 1 link 1</Link>
                  <Link to="/column-1-link-2" onClick={handleLinkClick}>Column 1 link 2</Link>
                  <Link to="/column-1-link-3" onClick={handleLinkClick}>Column 1 link 3</Link>
                </li>
                <li>
                  <Link to="/column-2-link-1" onClick={handleLinkClick}>Column 2 link 1</Link>
                  <Link to="/column-2-link-2" onClick={handleLinkClick}>Column 2 link 2</Link>
                  <Link to="/column-2-link-3" onClick={handleLinkClick}>Column 2 link 3</Link>
                </li>
                <li>
                  <Link to="/column-3-link-1" onClick={handleLinkClick}>Column 3 link 1</Link>
                  <Link to="/column-3-link-2" onClick={handleLinkClick}>Column 3 link 2</Link>
                  <Link to="/column-3-link-3" onClick={handleLinkClick}>Column 3 link 3</Link>
                </li>
                <li>
                  <Link to="/column-4-link-1" onClick={handleLinkClick}>Column 4 link 1</Link>
                  <Link to="/column-4-link-2" onClick={handleLinkClick}>Column 4 link 2</Link>
                  <Link to="/column-4-link-3" onClick={handleLinkClick}>Column 4 link 3</Link>
                </li>
                <li>
                  <Link to="/column-5-link-1" onClick={handleLinkClick}>Column 5 link 1</Link>
                  <Link to="/column-5-link-2" onClick={handleLinkClick}>Column 5 link 2</Link>
                  <Link to="/column-5-link-3" onClick={handleLinkClick}>Column 5 link 3</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </nav>

        <Link to="/about" className="btn-getstarted flex-md-shrink-0 d-none d-xl-block" onClick={handleLinkClick}>
          Get Started
        </Link>
       

      </div>
       <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} me-3`}
            onClick={toggleMobileNav}
          ></i>
    </header>
  );
};

export default Header;