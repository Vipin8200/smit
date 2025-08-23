import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import PureCounter from '@srexi/purecounterjs';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
// Image import 
import hero from '../assets/img/hero-img.png';
import about from '../assets/img/about.jpg';
import testimonial1 from '../assets/img/girl.jpg'
import testimonial2 from '../assets/img/shop.jpg'
import testimonial3 from '../assets/img/boy.jpg'
import '../assets/css/Main.css'
import { ArrowRight, Code, Palette, Globe, ShoppingBag, Terminal, Smartphone, Users, PenTool  } from 'lucide-react';



const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
   const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  // Intersection Observer for animations
 useEffect(() => {
  observerRef.current = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
          observerRef.current.unobserve(entry.target); // unobserve once visible
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el) => observerRef.current.observe(el));

  return () => {
    elements.forEach((el) => observerRef.current.unobserve(el)); // ✅ this was missing
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  };
}, []);


  useEffect(() => {
    const handleScroll = () => {
      const body = document.querySelector('body');
      const header = document.querySelector('#header');
      if (!header) return;
      if (
        header.classList.contains('scroll-up-sticky') ||
        header.classList.contains('sticky-top') ||
        header.classList.contains('fixed-top')
      ) {
        window.scrollY > 100
          ? body.classList.add('scrolled')
          : body.classList.remove('scrolled');
      }
    };

    const handleScrollTop = () => {
      const scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add('active')
          : scrollTop.classList.remove('active');
      }
    };

    const handleScrollSpy = () => {
      const links = document.querySelectorAll('.navmenu a');
      links.forEach(link => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;
        const pos = window.scrollY + 200;
        if (
          pos >= section.offsetTop &&
          pos <= section.offsetTop + section.offsetHeight
        ) {
          document.querySelectorAll('.navmenu a.active').forEach(el => el.classList.remove('active'));
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    const aosInit = () => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    };

    const initIsotope = () => {
      document.querySelectorAll('.isotope-layout').forEach(layout => {
        const layoutMode = layout.getAttribute('data-layout') || 'masonry';
        const filter = layout.getAttribute('data-default-filter') || '*';
        const sort = layout.getAttribute('data-sort') || 'original-order';

        let iso;
        imagesLoaded(layout.querySelector('.isotope-container'), () => {
          iso = new Isotope(layout.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode,
            filter,
            sortBy: sort
          });
        });

        layout.querySelectorAll('.isotope-filters li').forEach(btn => {
          btn.addEventListener('click', () => {
            layout.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            btn.classList.add('filter-active');
            iso.arrange({ filter: btn.getAttribute('data-filter') });
            aosInit();
          });
        });
      });
    };

    const initLightbox = () => {
      GLightbox({ selector: '.glightbox' });
    };

    const initSwiper = () => {
      document.querySelectorAll('.init-swiper').forEach(swiperElement => {
        const configEl = swiperElement.querySelector('.swiper-config');
        if (configEl) {
          const config = JSON.parse(configEl.innerHTML.trim());
          new Swiper(swiperElement, config);
        }
      });
    };

    const initCounter = () => {
      new PureCounter();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollTop);
    window.addEventListener('scroll', handleScrollSpy);
    window.addEventListener('load', () => {
      handleScroll();
      handleScrollTop();
      handleScrollSpy();
      aosInit();
      initLightbox();
      initCounter();
      initIsotope();
      initSwiper();
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollTop);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const handleRedirect = () => {
    navigate('/next-page'); // Update with your desired path
  };

  const testimonials = [
    // {
    //   id: 1,
    //   name: 'Krupa Joshi',
    //   position: 'Data Analyst',
    //   rating: 5,
    //   text: 'This platform has changed my career!',
    //   image: testimonial1,
    // },
    {
      id: 2,
      name: 'Chill Spot Ice Cream',
      position: 'Shop Owner',
      rating: 4,
      text: 'Incredible service and team!',
      image: testimonial2,
    },
    {
      id: 3,
      name: 'Smit Patel',
      position: 'Ownar of Hashtag Consultancy',
      rating: 4,
      text: 'Amazing experience from start to finish!',
      image: testimonial3,
    },
    // Add more testimonials as needed
  ];

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 3000); // Change slide every 3s
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, currentSlide]);


  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning user experiences that engage and convert visitors into customers.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Graphics Designin",
      description: "Crafting visually compelling designs that communicate your brand's message clearly and creatively, leaving a lasting impression on your audience.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive, fast-loading websites with modern technologies and best practices for optimal performance.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Comprehensive online store development with secure payment systems and inventory management.",
      color: "from-green-500 to-teal-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Custom Software",
      description: "Tailored software solutions designed to streamline your business processes and increase efficiency.",
      color: "from-indigo-500 to-purple-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business leverage the latest innovations and stay competitive.",
      color: "from-pink-500 to-rose-400"
    }
  ];

  return (
    <div className="mt-10">
      {/* Floating Arrow Icon */}
      <div
        onClick={handleRedirect}
        className="fixed top-5 right-5 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition"
        title="Go to next page"
      >
        <i className="bi bi-arrow-right-short text-2xl"></i>
      </div>

      <main id="main">
        {/* Hero Section */}
        <section id="hero" className="hero section min-h-screen flex items-center py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="order-1 sm:order-1 lg:order-1 lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  We offer modern solutions for growing your business
                </h1>
                <p className="text-base md:text-xl text-gray-600 mb-8 leading-relaxed">
                 We deliver innovative solutions that drive business growth and success
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#about" className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                    Get Started 
                    <ArrowRight className="ml-2 w-5 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-2 sm:order-2 lg:order-2 flex justify-center">
                <img 
                  src={hero} 
                  className="w-full max-w-md lg:max-w-lg h-auto" 
                  alt="hero-img" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 sm:order-1 lg:order-1">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-purple-600">
                    Who We Are
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Innovative IT Solutions for Tomorrow's Challenges
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We are a passionate startup dedicated to delivering cutting-edge IT services that transform businesses and drive digital innovation. Our mission is to bridge the gap between technology and business success.
                  </p>
                  <div className="pt-4">
                    <Link to="/about" className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 sm:order-2 lg:order-2">
                <img 
                  src={about} 
                  className="w-full h-auto rounded-lg shadow-lg" 
                  alt="About us" 
                />
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}

        {/* Stats Section */}
        {/* <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
                    <div>
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={232}
                        data-purecounter-duration={1}
                        className="purecounter"
                    />
                    <p>Happy Clients</p>
                    </div>
                </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i
                    className="bi bi-journal-richtext color-orange flex-shrink-0"
                    style={{ color: "#ee6c20" }}
                    />
                    <div>
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={521}
                        data-purecounter-duration={1}
                        className="purecounter"
                    />
                    <p>Projects</p>
                    </div>
                </div>
                </div>
               
                <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i
                    className="bi bi-headset color-green flex-shrink-0"
                    style={{ color: "#15be56" }}
                    />
                    <div>
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={1463}
                        data-purecounter-duration={1}
                        className="purecounter"
                    />
                    <p>Hours Of Support</p>
                    </div>
                </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i
                    className="bi bi-people color-pink flex-shrink-0"
                    style={{ color: "#bb0852" }}
                    />
                    <div>
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={15}
                        data-purecounter-duration={1}
                        className="purecounter"
                    />
                    <p>Hard Workers</p>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
        </section> */}
        {/* /Stats Section */}

        {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div 
            id="services-header"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['services-header'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Services
                {/* <div className="absolute -bottom-(-2) left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div> */}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions to help your business succeed in today's competitive market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                data-animate
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100 ${
                  isVisible[`service-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services"  className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* /Services Section */}

        {/* Testimonials Section */}
       {/* // Replace your testimonials section with this mobile-friendly version */}
      <section id="testimonials" className="py-16 px-4 bg-gray-50">
        {/* Section Title */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            What they are saying about us
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Slides Container */}
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                    style={{
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      opacity: currentSlide === index ? 1 : 0.3,
                      transform: currentSlide === index ? 'scale(1)' : 'scale(0.95)'
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mx-auto max-w-2xl">
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-center mb-6">
                        <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </blockquote>

                      {/* Profile */}
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-blue-50"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Hidden on small screens */}
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ zIndex: 10 }}
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ zIndex: 10 }}
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-between items-center mt-6 px-4">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-50 rounded-full p-3 shadow-md transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-50 rounded-full p-3 shadow-md transition-all duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Touch/Swipe indicator for mobile */}
            <div className="block md:hidden text-center mt-4">
              <p className="text-sm text-gray-500">
                Swipe or use arrows to navigate
              </p>
            </div>
          </div>
        </div>
      </section>
        {/* /Testimonials Section */}

        {/* Team Section */}
            {/* <section id="team" className="team section">
              
                <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Our hard working team</p>
                </div>
              
                <div className="container">
                <div className="row gy-4">
                    <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    >
                    <div className="team-member">
                        <div className="member-img">
                        <img
                            src="assets/img/team/team-1.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="social">
                            <a href="">
                            <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                            <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                            <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                            <i className="bi bi-linkedin" />
                            </a>
                        </div>
                        </div>
                        <div className="member-info">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        <p>
                            Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                            tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                            corporis et voluptate.
                        </p>
                        </div>
                    </div>
                    </div>
                
                    <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={200}
                    >
                    <div className="team-member">
                        <div className="member-img">
                        <img
                            src="assets/img/team/team-2.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="social">
                            <a href="">
                            <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                            <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                            <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                            <i className="bi bi-linkedin" />
                            </a>
                        </div>
                        </div>
                        <div className="member-info">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                        <p>
                            Quo esse repellendus quia id. Est eum et accusantium pariatur
                            fugit nihil minima suscipit corporis. Voluptate sed quas
                            reiciendis animi neque sapiente.
                        </p>
                        </div>
                    </div>
                    </div>
                  
                    <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    >
                    <div className="team-member">
                        <div className="member-img">
                        <img
                            src="assets/img/team/team-3.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="social">
                            <a href="">
                            <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                            <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                            <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                            <i className="bi bi-linkedin" />
                            </a>
                        </div>
                        </div>
                        <div className="member-info">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                        <p>
                            Vero omnis enim consequatur. Voluptas consectetur unde qui
                            molestiae deserunt. Voluptates enim aut architecto porro
                            aspernatur molestiae modi.
                        </p>
                        </div>
                    </div>
                    </div>
                  
                    <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={400}
                    >
                    <div className="team-member">
                        <div className="member-img">
                        <img
                            src="assets/img/team/team-4.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="social">
                            <a href="">
                            <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                            <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                            <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                            <i className="bi bi-linkedin" />
                            </a>
                        </div>
                        </div>
                        <div className="member-info">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                        <p>
                            Rerum voluptate non adipisci animi distinctio et deserunt amet
                            voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.
                        </p>
                        </div>
                    </div>
                    </div>
                   
                </div>
                </div>
            </section> */}
        {/* /Team Section */}
      </main>
    </div>
  );
};

export default Home;
