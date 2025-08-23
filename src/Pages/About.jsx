import React, { useEffect } from 'react';
import logo from '../assets/image/smit_logo.png';
import { Target, Users, Zap, Settings, TrendingUp, Shield } from "lucide-react";
import { Link } from 'react-router-dom';

// import Founder from '../assets/img/Fouder.jpg'; 
// import Founder from '../assets/img/Fouder2.jpg';


const About = () => {
  useEffect(() => {
    // AOS Animation Init
    const aosInit = () => {
      // Simple animation observer since we don't have AOS library
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      }, observerOptions);

      document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
      });
    };
    

    // Counter Animation
    const initCounter = () => {
      const counters = document.querySelectorAll('.about-counter-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            updateCounter();
            observer.disconnect();
          }
        });

        observer.observe(counter);
      });
    };

    aosInit();
    initCounter();
  }, []);

  return (
    <main id="main">
      <style jsx>{`
        .about-page {
          padding: 60px 0 40px;
        }
        
        .about-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .about-row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }
        
        .about-col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }
        
        .about-col-lg-4 {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
          padding: 0 15px;
        }
        
        .about-col-lg-3 {
          flex: 0 0 25%;
          max-width: 25%;
          padding: 0 15px;
        }
        
        .about-col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }
        
        .about-col-md-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
          padding: 0 15px;
        }
        
        @media (max-width: 991px) {
          .about-col-lg-6, .about-col-lg-4, .about-col-lg-3 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 767px) {
          .about-col-md-6, .about-col-md-8 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 30px;
          }
          
          .about-page {
            padding: 40px 0 30px;
          }
        }
        
        .about-section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .about-section-title h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
          position: relative;
        }
        
        @media (max-width: 767px) {
          .about-section-title h2 {
            font-size: 1.5rem;
          }
        }
        
        .about-section-title h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .about-section-title p {
          font-size: 0.95rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        @media (max-width: 767px) {
          .about-section-title p {
            font-size: 0.9rem;
          }
        }
        
        .about-content h3 {
          color: #667eea;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        @media (max-width: 767px) {
          .about-content h3 {
            font-size: 0.9rem;
          }
        }
        
        .about-content h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        
        @media (max-width: 767px) {
          .about-content h2 {
            font-size: 1.3rem;
            margin-bottom: 15px;
          }
        }
        
        .about-content p {
          font-size: 0.95rem;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        @media (max-width: 767px) {
          .about-content p {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 15px;
          }
        }
        
        .about-btn-read-more {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        @media (max-width: 767px) {
          .about-btn-read-more {
            padding: 8px 20px;
            font-size: 0.85rem;
          }
        }
        
        .about-btn-read-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          color: white;
          text-decoration: none;
        }
        
        .about-img-fluid {
          max-width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        
        .about-stats {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 0;
        }
        
        .about-stats-item {
          text-align: center;
          padding: 25px 15px;
        }
        
        .about-stats-item i {
          font-size: 2.5rem;
          margin-bottom: 15px;
          opacity: 0.8;
        }
        
        @media (max-width: 767px) {
          .about-stats-item i {
            font-size: 2rem;
          }
        }
        
        .about-counter-number {
          font-size: 2.2rem;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }
        
        @media (max-width: 767px) {
          .about-counter-number {
            font-size: 1.8rem;
          }
        }
        
        .about-counter-label {
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        @media (max-width: 767px) {
          .about-counter-label {
            font-size: 0.9rem;
          }
        }
        
        .about-values {
          padding: 60px 0;
          background-color: #f8f9fa;
        }
        
        .about-value-item {
          text-align: center;
          padding: 30px 25px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          height: 100%;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        
        @media (max-width: 767px) {
          .about-value-item {
            padding: 25px 20px;
            margin-bottom: 15px;
          }
        }
        
        .about-value-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .about-value-item i {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }
        
        @media (max-width: 767px) {
          .about-value-item i {
            font-size: 2rem;
            margin-bottom: 15px;
          }
        }
        
        .about-value-item h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
        }
        
        @media (max-width: 767px) {
          .about-value-item h4 {
            font-size: 1.1rem;
            margin-bottom: 12px;
          }
        }
        
        .about-value-item p {
          color: #6c757d;
          line-height: 1.5;
          font-size: 0.9rem;
        }
        
        @media (max-width: 767px) {
          .about-value-item p {
            font-size: 0.85rem;
          }
        }
        
        .about-team {
          padding: 60px 0;
        }
        
        .about-team-member {
          text-align: center;
          background: white;
          border-radius: 15px;
          padding: 35px 25px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        @media (max-width: 767px) {
          .about-team-member {
            padding: 30px 20px;
          }
        }
        
        .about-team-member:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .about-team-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          font-weight: 700;
        }
        
        @media (max-width: 767px) {
          .about-team-img {
            width: 80px;
            height: 80px;
            font-size: 2rem;
            margin-bottom: 15px;
          }
        }
        
        .about-team-member h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        
        @media (max-width: 767px) {
          .about-team-member h4 {
            font-size: 1.1rem;
          }
        }
        
        .about-team-member .about-position {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 0.9rem;
        }
        
        @media (max-width: 767px) {
          .about-team-member .about-position {
            font-size: 0.85rem;
          }
        }
        
        .about-team-member p {
          color: #6c757d;
          line-height: 1.5;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }
        
        @media (max-width: 767px) {
          .about-team-member p {
            font-size: 0.85rem;
          }
        }
        
        .about-social-links {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        
        .about-social-links a {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6c757d;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        @media (max-width: 767px) {
          .about-social-links a {
            width: 32px;
            height: 32px;
            font-size: 0.8rem;
          }
        }
        
        .about-social-links a:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
        }
        
        .about-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
          color: white;
          padding: 60px 0;
          text-align: center;
        }
        
        .about-cta h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        @media (max-width: 767px) {
          .about-cta h2 {
            font-size: 1.5rem;
          }
        }
        
        .about-cta p {
          font-size: 1rem;
          margin-bottom: 30px;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        @media (max-width: 767px) {
          .about-cta p {
            font-size: 0.9rem;
            margin-bottom: 25px;
          }
        }
        
        .about-btn-cta {
          background: white;
          color: #2c3e50;
          padding: 12px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 767px) {
          .about-btn-cta {
            padding: 10px 30px;
            font-size: 0.9rem;
          }
        }
        
        .about-btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255,255,255,0.3);
          color: #2c3e50;
          text-decoration: none;
        }
        
        /* Animation Classes */
        [data-aos] {
          opacity: 0;
          transition: all 0.6s ease;
        }
        
        [data-aos="fade-up"] {
          transform: translateY(50px);
        }
        
        [data-aos="fade-left"] {
          transform: translateX(-50px);
        }
        
        [data-aos="fade-right"] {
          transform: translateX(50px);
        }
        
        [data-aos="zoom-in"] {
          transform: scale(0.8);
        }
        
        [data-aos="zoom-out"] {
          transform: scale(1.2);
        }
        
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }
        
        .about-d-flex {
          display: flex;
        }
        
        .about-flex-column {
          flex-direction: column;
        }
        
        .about-justify-content-center {
          justify-content: center;
        }
        
        .about-align-items-center {
          align-items: center;
        }
        
        .about-text-center {
          text-align: center;
        }
        
        .about-mb-4 {
          margin-bottom: 1.5rem;
        }
        
        .about-mb-5 {
          margin-bottom: 3rem;
        }
        
        .about-gx-0 {
          margin-left: 0;
          margin-right: 0;
        }
        
        .about-gx-0 > * {
          padding-left: 0;
          padding-right: 0;
        }
        
        @media (max-width: 576px) {
          .about-container {
            padding: 0 10px;
          }
        }
      `}</style>

      {/* Hero About Section */}
      <section id="about" className="about-page section"  data-aos="fade-up">
        <div className="about-container" style={{marginTop: '80px'}}>
          <div className="about-row about-gx-0">
            <div className="about-col-lg-6 about-d-flex about-flex-column about-justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="about-content">
                <h3>Who We Are</h3>
                <h2>
                  Innovative IT Solutions for Tomorrow's Challenges
                </h2>
                <p>
                  We are a passionate startup dedicated to delivering cutting-edge IT services that transform businesses and drive digital innovation. Our mission is to bridge the gap between technology and business success.
                </p>
                <div className="about-text-center text-lg-start">
                  <a href="#vision" className="about-btn-read-more about-d-inline-flex about-align-items-center about-justify-content-center align-self-center">
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="about-col-lg-6 about-d-flex about-align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <div style={{
                width: '100%',
                height: '350px',
                background: 'linear-gradient(135deg, #92a3eeff 0%, #d6c6e7ff 100%)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '4rem',
                fontWeight: 'bold'
              }}>
                <img src={logo} alt="DevSquad Logo" style={{width: 300}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="about-page section" data-aos="fade-up">
        <div className="about-container">
          <div className="about-section-title" data-aos="fade-up">
            <h2>Our Vision & Mission</h2>
            <p>Driving digital transformation through innovative solutions and exceptional service</p>
          </div>
          <div className="about-row">
            <div className="about-col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="about-content">
                <h3>Our Vision</h3>
                <h2>To be the leading catalyst for digital transformation</h2>
                <p>
                  We envision a world where technology seamlessly integrates with business operations, 
                  creating opportunities for growth, efficiency, and innovation. Our goal is to be the 
                  trusted partner that organizations turn to for digital transformation.
                </p>
              </div>
            </div>
            <div className="about-col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="about-content">
                <h3>Our Mission</h3>
                <h2>Empowering businesses through technology excellence</h2>
                <p>
                  Our mission is to deliver exceptional IT services that drive business success. We combine 
                  technical expertise with innovative thinking to create solutions that are not just functional, 
                  but transformational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
    <section className="about-values" data-aos="fade-up">
      <div className="about-container">
        <div className="about-section-title" data-aos="fade-up">
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="about-row">
          <div className="about-col-lg-4 about-col-md-6 about-mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-value-item">
              <div className="bg-blue-100 p-3 rounded-full inline-flex">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h4>Innovation First</h4>
              <p>We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that give our clients a competitive advantage.</p>
            </div>
          </div>
          <div className="about-col-lg-4 about-col-md-6 about-mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="about-value-item">
              <div className="bg-blue-100 p-3 rounded-full inline-flex">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4>Client Partnership</h4>
              <p>We believe in building long-term relationships based on trust, transparency, and mutual success. Your success is our success.</p>
            </div>
          </div>
          <div className="about-col-lg-4 about-col-md-6 about-mb-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="about-value-item">
              <div className="bg-blue-100 p-3 rounded-full inline-flex">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h4>Excellence Delivered</h4>
              <p>We are committed to delivering high-quality solutions on time and within budget, exceeding expectations at every turn.</p>
            </div>
          </div>
          <div className="about-col-lg-4 about-col-md-6 about-mb-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="about-value-item">
              <div className="bg-blue-100 p-3 rounded-full inline-flex">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h4>Technical Mastery</h4>
              <p>Our team continuously evolves their skills to stay ahead of technology trends and provide expert guidance in every domain.</p>
            </div>
          </div>
          <div className="about-col-lg-4 about-col-md-6 about-mb-4" data-aos="zoom-in" data-aos-delay="500">
            <div className="about-value-item">
              <div className="bg-blue-100 p-3 rounded-full inline-flex">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4>Continuous Growth</h4>
              <p>We foster a culture of learning and improvement, constantly evolving to better serve our clients and community.</p>
            </div>
          </div>
          <div className="about-col-lg-4 about-col-md-6 about-mb-4" data-aos="zoom-in" data-aos-delay="600">
            <div className="about-value-item">
              <div className="bg-blue-100 p-3 rounded-full inline-flex">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4>Security & Trust</h4>
              <p>We prioritize data security and privacy in everything we do, ensuring your business assets are protected at all times.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Team Section */}
      <section className="about-team" data-aos="fade-up">
        <div className="about-container">
          <div className="about-section-title" data-aos="fade-up">
            <h2>Meet Our Founder</h2>
            <p>The visionary behind our innovative solutions</p>
          </div>
          <div className="about-row about-justify-content-center">
            <div className="about-col-lg-6 about-col-md-8" data-aos="zoom-in" data-aos-delay="200">
              <div className="about-team-member">
                <div className="about-team-img">SP</div>
                {/* <img src={Founder} alt="" className='about-team-img' /> */}
                <h4>Smit Patel</h4>
                <div className="about-position">Founder & CEO</div>
                <p>
                  A passionate full-stack developer with extensive experience in creating scalable 
                  web applications and innovative IT solutions. Dedicated to transforming ideas 
                  into powerful digital experiences.
                </p>
                <div className="about-social-links">
                  <a href="#" target='_blank'><i className="bi bi-instagram"></i></a>
                  <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                  <a href="#" target='_blank'><i className="bi bi-linkedin"></i></a>
                  <a href="#" target='_blank'><i className="bi bi-building"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-values" data-aos="fade-up">
        <div className="about-container">
          <div className="about-section-title" data-aos="fade-up">
            <h2>Why Choose Us</h2>
            <p>What sets us apart in the competitive IT landscape</p>
          </div>
          <div className="about-row">
            <div className="about-col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-content">
                <h3>Fresh Perspective</h3>
                <h2>Innovation Without Legacy Constraints</h2>
                <p>
                  As a startup, we bring fresh ideas and modern approaches to every project. 
                  We're not bound by outdated practices, allowing us to implement the latest 
                  technologies that truly serve your needs.
                </p>
              </div>
            </div>
            <div className="about-col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="about-content">
                <h3>Personal Attention</h3>
                <h2>Direct Access to Decision Makers</h2>
                <p>
                  Work directly with our founder and core team members. No layers of bureaucracy 
                  - just direct communication with people who understand your project and have 
                  the authority to make decisions quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="about-row" style={{marginTop: '40px'}}>
            <div className="about-col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="about-content">
                <h3>Agile & Flexible</h3>
                <h2>Rapid Response to Your Needs</h2>
                <p>
                  Our lean structure allows us to pivot quickly and adapt to changing requirements. 
                  We can implement changes faster than larger agencies and are always ready to 
                  embrace new challenges.
                </p>
              </div>
            </div>
            <div className="about-col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="about-content">
                <h3>Cost-Effective Solutions</h3>
                <h2>Maximum Value for Your Investment</h2>
                <p>
                  Without the overhead of large corporations, we offer competitive pricing while 
                  maintaining high quality. You get enterprise-level solutions at startup-friendly 
                  prices with transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta" data-aos="fade-up">
        <div className="about-container">
          <div className="about-row about-justify-content-center">
            <div className="about-col-lg-8 about-text-center">
              <h2 data-aos="fade-up" data-aos-delay="100">Ready to Transform Your Business?</h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Let's discuss how we can help you achieve your digital transformation goals. 
                Contact us today for a free consultation.
              </p>
              <Link to="/contact" className="about-btn-cta" data-aos="fade-up" data-aos-delay="300">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;