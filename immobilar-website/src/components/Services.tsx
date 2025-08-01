import React from 'react';
import { Home, ShoppingCart, Key, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Selling",
      description: "We help you sell your property at the best possible price with our expert market knowledge and extensive network of buyers.",
      link: "#"
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Buying",
      description: "Find your dream home with our comprehensive property search and expert guidance throughout the buying process.",
      link: "#"
    },
    {
      icon: <Key size={32} />,
      title: "Renting",
      description: "Whether you're looking to rent or invest in rental properties, we provide complete support and guidance.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive real estate solutions tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="service-link">
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 