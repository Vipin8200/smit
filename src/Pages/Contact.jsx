import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Send, MessageSquare, User, Building, CheckCircle, Loader2 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Load EmailJS SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      // Initialize EmailJS with your public key
      window.emailjs.init("M9lOONJnRbUlNGHtw"); // Replace with your EmailJS public key
    };
    document.head.appendChild(script);

    // Animation observer
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

    return () => {
      observer.disconnect();
      // Cleanup script
      const existingScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (submitError) {
      setSubmitError('');
    }
  };

  const sendEmail = async () => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        to_email: 'devsquad.agency@gmail.com' // Your receiving email
      };

      const result = await window.emailjs.send(
        'service_rep3q6r', // Replace with your EmailJS service ID
        'template_dms5h7h', // Replace with your EmailJS template ID
        templateParams
      );
      
      console.log('Email sent successfully:', result);
      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: error.message };
    }
  };

  const sendToFirebase = async () => {
    try {
      // If you have Firebase configured, uncomment and use this
      /*
      const { initializeApp } = await import('firebase/app');
      const { getFirestore, collection, addDoc } = await import('firebase/firestore');
      
      const firebaseConfig = {
        // Your Firebase config here
      };
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      
      const docRef = await addDoc(collection(db, 'contact-submissions'), {
        ...formData,
        timestamp: new Date(),
        status: 'new'
      });
      
      console.log('Document written with ID: ', docRef.id);
      */
      
      // For now, we'll just simulate Firebase storage
      console.log('Form data would be saved to Firebase:', formData);
      return { success: true };
    } catch (error) {
      console.error('Firebase error:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.service || !formData.message) {
        throw new Error('Please fill in all required fields.');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address.');
      }

      // Send email using EmailJS
      const emailResult = await sendEmail();
      if (!emailResult.success) {
        throw new Error('Failed to send email: ' + (emailResult.error || 'Unknown error'));
      }

      // Save to Firebase (optional)
      await sendToFirebase();
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <style jsx>{`
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
        
        [data-aos="fade-down"] {
          transform: translateY(-50px);
        }
        
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-form-shadow {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
        }

        .contact-card-hover {
          transition: all 0.3s ease;
        }

        .contact-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .input-focus:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
        }

        .btn-gradient:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .btn-gradient:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-animation {
          animation: successPulse 0.6s ease-out;
        }

        .error-animation {
          animation: errorShake 0.5s ease-out;
        }

        .loading-spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes successPulse {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes errorShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white" style={{marginTop:150}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with cutting-edge IT solutions? 
              Let's discuss your project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact-form" className="btn-gradient text-white px-6 py-2 rounded-full font-semibold inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Start a Project
              </a>
              <a href="#contact-info" className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                View Contact Info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section id="contact-info" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Connect & <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We meet at your preferred location - whether it's your office, a comfortable cafe, or any convenient spot for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="contact-card-hover bg-white rounded-2xl p-8 text-center border border-gray-100" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <p className="text-sm text-gray-500">
                <a href="tel:+918200668922" className="hover:text-purple-600 transition-colors">
                  +91 72270 95393
                </a><br />
                {/* <a href="tel:+918160385225" className="hover:text-purple-600 transition-colors">
                  +91 81603 85225
                </a> */}
              </p>
            </div>

            <div className="contact-card-hover bg-white rounded-2xl p-8 text-center border border-gray-100" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
              <p className="text-sm text-gray-500">
                <a href="mailto:info@company.com" className="hover:text-purple-600 transition-colors">
                  info@company.com
                </a><br />
              </p>
            </div>

            <div className="contact-card-hover bg-white rounded-2xl p-8 text-center border border-gray-100" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600 mb-4">We're available when you need us</p>
              <p className="text-sm text-gray-500">
                Mon - Fri: 9:00 AM - 7:00 PM<br />
                Sat: 10:00 AM - 4:00 PM<br />
                Sun: Emergency Only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info Sidebar - Now on Left */}
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose <span className="gradient-text">Karmel</span>?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600 text-sm">Round-the-clock assistance for all your technical needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      <p className="text-gray-600 text-sm">Quick turnaround times without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600 text-sm">Skilled professionals with years of industry experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                      <p className="text-gray-600 text-sm">Best value for money with transparent pricing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Frequently Asked <span className="gradient-text">Questions</span>
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">How quickly can you start my project?</h4>
                    <p className="text-gray-600 text-sm">We can typically begin within 1-2 weeks after project confirmation and initial payment.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h4>
                    <p className="text-gray-600 text-sm">Yes, we offer various support packages including maintenance, updates, and technical assistance.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">What's your payment structure?</h4>
                    <p className="text-gray-600 text-sm">We work with milestone-based payments: 30% upfront, 40% at midpoint, and 30% upon completion.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form - Now on Right */}
            <div data-aos="fade-left">
                <div className="bg-white rounded-3xl p-8 md:p-10 contact-form-shadow">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Start Your <span className="gradient-text">Project</span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    {isSubmitted ? (
                    <div className="text-center py-12 success-animation">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">Thanks for reaching out. We'll be in touch soon!</p>
                    </div>
                    ) : (
                    <div className="space-y-6">
                        {submitError && (
                          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl error-animation">
                            {submitError}
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                            </label>
                            <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                            <input type="text" name="name" value={formData.name}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="Your full name"
                            />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                            </label>
                            <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="your@email.com"
                            />
                            </div>
                        </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                            </label>
                            <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="+91 00000 00000"
                            />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Company Name
                            </label>
                            <div className="relative">
                            <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="Your company name"
                            />
                            </div>
                        </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Service Needed *
                            </label>
                            <div className="relative">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <option value="" className="text-gray-500">Select a service</option>
                                <option value="web-development">Web Development</option>
                                <option value="mobile-app">Mobile App Development</option>
                                <option value="ui-ux-design">UI/UX Design</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="ecommerce">E-commerce Solutions</option>
                                <option value="consulting">IT Consulting</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Budget
                            </label>
                            <div className="relative">
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <option value="" className="text-gray-500">Select budget range</option>
                                <option value="under-50k">Under ₹50,000</option>
                                <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                                <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                                <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                                <option value="above-5l">Above ₹5,00,000</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Details *
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            disabled={isLoading}
                            rows={6}
                            className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                        ></textarea>
                        </div>

                        <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full btn-gradient text-white py-3.5 px-3 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:transform-none disabled:hover:shadow-lg"
                        >
                        {isLoading ? (
                            <>
                            <Loader2 className="w-5 h-5 loading-spinner" />
                            Sending Message...
                            </>
                        ) : (
                            <>
                            <Send className="w-5 h-5" />
                            Send Message
                            </>
                        )}
                        </button>
                    </div>
                    )}
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;