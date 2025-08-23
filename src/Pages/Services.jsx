import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Image, 
  Code, 
  ShoppingCart, 
  Cpu, 
  Smartphone, 
  Users, 
  ArrowRight,
  X,
  CheckCircle,
  Clock,
  Star,
  Zap
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8" />,
      description: "Create intuitive and engaging user experiences that drive conversions and user satisfaction.",
      shortDesc: "User-centered design solutions that enhance digital experiences and drive business growth.",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Interactive Design", "Usability Testing"],
      technologies: ["Figma", "Sketch", "InVision", "Principle"],
      deliverables: ["Design System", "Prototypes", "User Journey Maps", "Style Guides"],
      timeline: "2-4 weeks",
      startingPrice: "$1,200"
    },
    {
      id: 2,
      title: "Graphics Designing",
      icon: <Image className="h-8 w-8" />,
      description: "Professional graphic design services for branding, marketing materials, and digital assets.",
      shortDesc: "Creative visual solutions that communicate your brand message effectively across all platforms.",
      features: ["Brand Identity Design", "Marketing Materials", "Digital Graphics", "Print Design"],
      technologies: ["Adobe Creative Suite", "Canva", "Illustrator"],
      deliverables: ["Logo & Branding", "Business Cards", "Brochures", "Social Media Graphics"],
      timeline: "1-3 weeks",
      startingPrice: "$500"
    },
    {
      id: 3,
      title: "Web Development",
      icon: <Code className="h-8 w-8" />,
      description: "Custom web applications built with modern technologies for optimal performance and scalability.",
      shortDesc: "Responsive, fast, and secure websites that provide exceptional user experiences across all devices.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "CMS Integration"],
      technologies: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript"],
      deliverables: ["Responsive Website", "Documentation", "Hosting Setup"],
      timeline: "4-8 weeks",
      startingPrice: "$2,500"
    },
    {
      id: 4,
      title: "E-commerce Development",
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Full-featured e-commerce solutions with secure payment gateways and inventory management.",
      shortDesc: "Complete online store solutions that drive sales and provide seamless shopping experiences.",
      features: ["Shopping Cart", "Payment Integration", "Inventory Management"],
      technologies: ["React", "Node.JS", "Express.JS", "MySQL", "Firebase"],
      deliverables: ["E-commerce Store", "Payment Setup", "Admin Dashboard"],
      timeline: "6-10 weeks",
      startingPrice: "$3,500"
    },
    {
      id: 5,
      title: "Custom Software Development",
      icon: <Cpu className="h-8 w-8" />,
      description: "Tailored software solutions designed to meet your specific business requirements and workflows.",
      shortDesc: "Bespoke software applications that streamline operations and solve unique business challenges.",
      features: ["Custom Architecture", "API Development", "Database Design", "Third-party Integrations"],
      technologies: ["React", "Node.JS", "Express.JS", "Redux", "API", "AWS", "MySQL"],
      deliverables: ["Custom Application", "API Documentation", "User Manual", "Support & Training"],
      timeline: "8-16 weeks",
      startingPrice: "$5,000"
    },
    {
      id: 6,
      title: "Mobile App Development",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      shortDesc: "Engaging mobile applications that connect with your audience on their preferred devices.",
      features: ["Cross-platform Development", "Native Performance", "Push Notifications", "Offline Capability"],
      technologies: ["React Native", "Firebase"],
      deliverables: ["Mobile App", "App Store Submission", "Backend API", "Analytics Setup"],
      timeline: "8-12 weeks",
      startingPrice: "$4,000"
    },
    {
      id: 7,
      title: "IT Consulting",
      icon: <Users className="h-8 w-8" />,
      description: "Strategic IT guidance to help you make informed technology decisions and optimize operations.",
      shortDesc: "Expert advice and strategic planning to align technology with your business objectives.",
      features: ["Technology Assessment", "Digital Strategy", "System Architecture", "Process Optimization"],
      technologies: ["Cloud Platforms", "DevOps Tools", "Security Solutions", "Analytics Tools"],
      deliverables: ["Strategy Document", "Implementation Roadmap", "Risk Assessment", "Recommendations"],
      timeline: "2-6 weeks",
      startingPrice: "$1,500"
    }
  ];

  useEffect(() => {
    // Animation setup
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

    return () => observer.disconnect();
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const navigateToDetails = () => {
    // In a real app, you would use React Router
    window.location.href = `/contact`;
  };

  return (
    <main id="main">
      <style jsx>{`
        .services-page {
          padding: 60px 0 40px;
        }
        
        .services-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .services-row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
          gap: 0;
        }
        
        .services-col-lg-4 {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
          padding: 0 15px;
          margin-bottom: 30px;
          display: flex;
        }
        
        .services-col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
          margin-bottom: 30px;
          display: flex;
        }
        
        .services-col-lg-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
          padding: 0 15px;
        }
        
        .services-col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
          margin-bottom: 30px;
          display: flex;
        }
        
        @media (max-width: 991px) {
          .services-col-lg-4, .services-col-lg-6 {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 767px) {
          .services-col-lg-4, .services-col-lg-6, .services-col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 30px;
          }
          
          .services-page {
            padding: 40px 0 30px;
          }
        }
        
        .services-section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .services-section-title h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
          position: relative;
        }
        
        @media (max-width: 767px) {
          .services-section-title h2 {
            font-size: 1.5rem;
          }
        }
        
        .services-section-title h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .services-section-title p {
          font-size: 0.95rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .services-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 0;
          text-align: center;
          margin-top: 80px;
        }
        
        .services-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        @media (max-width: 767px) {
          .services-hero h1 {
            font-size: 2rem;
          }
        }
        
        .services-hero p {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .services-grid {
          padding: 80px 0;
        }
        
        .service-card {
          background: white;
          border-radius: 15px;
          padding: 40px 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          width: 100%;
          cursor: pointer;
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
          min-height: 350px;
        }
        
        @media (max-width: 767px) {
          .service-card {
            padding: 30px 20px;
            min-height: 320px;
          }
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          border-color: #667eea;
        }
        
        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 25px;
          flex-shrink: 0;
        }
        
        @media (max-width: 767px) {
          .service-icon {
            width: 70px;
            height: 70px;
            margin-bottom: 20px;
          }
        }
        
        .service-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
        }
        
        @media (max-width: 767px) {
          .service-card h3 {
            font-size: 1.2rem;
          }
        }
        
        .service-card p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.95rem;
          flex-grow: 1;
        }
        
        .service-learn-more {
          color: #667eea;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          margin-top: auto;
        }
        
        .service-learn-more:hover {
          color: #764ba2;
          gap: 12px;
        }
        
        .services-cta {
          background: #f8f9fa;
          padding: 80px 0;
          text-align: center;
        }
        
        .services-cta h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
        }
        
        .services-cta p {
          font-size: 1rem;
          color: #6c757d;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .services-btn-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        
        .services-btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
          color: white;
          text-decoration: none;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          position: relative;
          transform: scale(0.8);
          animation: scaleIn 0.3s ease 0.1s forwards;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }
        
        .modal-content-wrapper {
          max-height: 90vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #667eea #f1f1f1;
        }
        
        .modal-content-wrapper::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-content-wrapper::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .modal-content-wrapper::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 4px;
        }
        
        .modal-content-wrapper::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
        }
        
        @media (max-width: 767px) {
          .modal-content {
            width: 95%;
            max-height: 95vh;
          }
        }
        
        .modal-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          position: relative;
        }
        
        @media (max-width: 767px) {
          .modal-header {
            padding: 30px 20px;
          }
        }
        
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
        
        .modal-service-icon {
          width: 90px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 767px) {
          .modal-service-icon {
            width: 80px;
            height: 80px;
          }
        }
        
        .modal-service-icon svg {
          width: 40px;
          height: 40px;
        }
        
        @media (max-width: 767px) {
          .modal-service-icon svg {
            width: 32px;
            height: 32px;
          }
        }
        
        .modal-body {
          padding: 40px;
        }
        
        @media (max-width: 767px) {
          .modal-body {
            padding: 30px 20px;
          }
        }
        
        .modal-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        @media (max-width: 767px) {
          .modal-title {
            font-size: 1.6rem;
          }
        }
        
        .modal-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          line-height: 1.5;
        }
        
        @media (max-width: 767px) {
          .modal-subtitle {
            font-size: 1rem;
          }
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }
        
        @media (max-width: 767px) {
          .feature-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2c3e50;
          font-size: 0.95rem;
        }
        
        .info-section {
          margin: 30px 0;
        }
        
        .info-section h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
        }
        
        .tech-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        
        .pricing-timeline {
          display: flex;
          justify-content: space-between;
          background: #f8f9fa;
          padding: 25px;
          border-radius: 15px;
          margin: 25px 0;
          border: 1px solid #e9ecef;
        }
        
        @media (max-width: 767px) {
          .pricing-timeline {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
        
        .pricing-item {
          text-align: center;
        }
        
        .pricing-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 5px;
        }
        
        .pricing-label {
          color: #6c757d;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .modal-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
        }
        
        @media (max-width: 767px) {
          .modal-actions {
            flex-direction: column;
          }
        }
        
        .btn-details {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }
        
        .btn-details:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          color: white;
          text-decoration: none;
        }
        
        .btn-contact {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .btn-contact:hover {
          background: #667eea;
          color: white;
          text-decoration: none;
          transform: translateY(-2px);
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          to { transform: scale(1); }
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
        
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }
        
        .services-text-center {
          text-align: center;
        }
        
        .services-mb-4 {
          margin-bottom: 1.5rem;
        }
        
        .services-justify-content-center {
          justify-content: center;
        }
      `}</style>

      {/* Hero Section */}
      <section className="services-hero" data-aos="fade-up">
        <div className="services-container">
          <h1 data-aos="fade-up" data-aos-delay="100">Our Services</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Comprehensive IT solutions designed to transform your business and drive digital success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid" data-aos="fade-up">
        <div className="services-container">
          <div className="services-section-title" data-aos="fade-up">
            <h2>What We Offer</h2>
            <p>Cutting-edge technology solutions tailored to your business needs</p>
          </div>
          
          <div className="services-row">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="services-col-lg-4 services-col-md-6" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <div className="service-card" onClick={() => openModal(service)}>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-learn-more">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DevSquad */}
      <section className="services-cta" data-aos="fade-up">
        <div className="services-container">
          <div className="services-row services-justify-content-center">
            <div className="services-col-lg-8 services-text-center">
              <h2 data-aos="fade-up" data-aos-delay="100">Why Choose DevSquad?</h2>
              <p data-aos="fade-up" data-aos-delay="200">
                We combine technical expertise with creative innovation to deliver solutions that 
                not only meet your requirements but exceed your expectations. Our startup agility 
                ensures rapid delivery without compromising on quality.
              </p>
              <a href="/contact" className="services-btn-cta" data-aos="fade-up" data-aos-delay="300">
                Start Your Project <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {showModal && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content-wrapper">
              <div className="modal-header">
                <button className="modal-close" onClick={closeModal}>
                  <X className="h-5 w-5" />
                </button>
                <div className="modal-service-icon">
                  {selectedService.icon}
                </div>
                <div className='w-full'>
                  <h2 className="modal-title">{selectedService.title}</h2>
                  <p className="modal-subtitle">{selectedService.shortDesc}</p>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="info-section">
                  <h4><CheckCircle className="h-5 w-5 text-green-500" /> Key Features</h4>
                  <div className="feature-grid">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="info-section">
                  <h4><Zap className="h-5 w-5 text-blue-500" /> Technologies</h4>
                  <div className="tech-tags">
                    {selectedService.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="info-section">
                  <h4><CheckCircle className="h-5 w-5 text-green-500" /> Deliverables</h4>
                  <div className="feature-grid">
                    {selectedService.deliverables.map((deliverable, index) => (
                      <div key={index} className="feature-item">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="pricing-timeline">
                  <div className="pricing-item">
                    <div className="pricing-value">{selectedService.startingPrice}</div>
                    <div className="pricing-label">Starting Price</div>
                  </div>
                  <div className="pricing-item">
                    <div className="pricing-value">{selectedService.timeline}</div>
                    <div className="pricing-label">Timeline</div>
                  </div>
                </div> */}

                <div className="modal-actions">
                  <button  className="btn-details" onClick={() => navigateToDetails(selectedService.id)}>
                      Get Quote <ArrowRight className="h-4 w-4" />
                  </button>
                  {/* <a href="/contact" className="btn-contact">
                    Get Quote
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Services;