import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
// import Portfolio from './Pages/PortfolioPage'
import Contact from './Pages/Contact'
import NotFound from './Components/NotFound'
import { useState, useEffect } from 'react'
// import Career from './Pages/Career'

// Valid routes configuration
const VALID_ROUTES = [
  '/',
  '/about',
  '/services', 
  // '/portfolio',
  '/contact',
  // '/career',
  '/404'
];

// Route validator component
function RouteValidator({ children }) {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [isValidRoute, setIsValidRoute] = useState(true);

  useEffect(() => {
    // Check if current route is valid
    const currentPath = location.pathname;
    const isValid = VALID_ROUTES.includes(currentPath);
    setIsValidRoute(isValid);
  }, [location]);

  return children;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <RouteValidator>
        <Layout>
          <Routes>
            {/* Main Routes */}
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/services" 
              element={<Services />} 
            />
            {/* <Route 
              path="/portfolio" 
              element={<Portfolio />} 
            /> */}
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            {/* <Route 
              path="/career" 
              element={<Career />} 
            /> */}
            
            {/* 404 Page Route */}
            <Route 
              path="/404" 
              element={<NotFound />} 
            />
            
            {/* Catch all other routes */}
            <Route 
              path="*" 
              element={<Navigate to="/404" replace />} 
            />
          </Routes>
        </Layout>
      </RouteValidator>
    </Router>
  )
}

export default App