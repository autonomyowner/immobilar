import React from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';

const Properties: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Hydra",
      location: "Hydra, Algiers",
      price: "€850,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "280m²",
      image: "/pics/2.jpg",
      type: "Villa"
    },
    {
      id: 2,
      title: "Modern Apartment in Bab Ezzouar",
      location: "Bab Ezzouar, Algiers",
      price: "€320,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "120m²",
      image: "/pics/3.jpg",
      type: "Apartment"
    },
    {
      id: 3,
      title: "Premium Penthouse in El Biar",
      location: "El Biar, Algiers",
      price: "€1,200,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "350m²",
      image: "/pics/5.jpg",
      type: "Penthouse"
    },
    {
      id: 4,
      title: "Investment Property in Sidi Yahia",
      location: "Sidi Yahia, Algiers",
      price: "€180,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "85m²",
      image: "/pics/8.jpg",
      type: "Investment"
    },
    {
      id: 5,
      title: "Luxury Villa with Pool",
      location: "El Biar, Algiers",
      price: "€950,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "400m²",
      image: "/pics/12.jpg",
      type: "Villa"
    },
    {
      id: 6,
      title: "Modern City Apartment",
      location: "Hydra, Algiers",
      price: "€280,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "95m²",
      image: "/pics/16.jpg",
      type: "Apartment"
    }
  ];

  return (
    <section id="properties" className="properties">
      <div className="properties-container">
        <div className="section-header">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">Discover our exclusive selection of premium properties</p>
        </div>
        
        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="property-img"
                />
                <div className="property-type">{property.type}</div>
              </div>
              
              <div className="property-info">
                <h3 className="property-title">{property.title}</h3>
                <div className="property-location">
                  <MapPin size={16} />
                  <span>{property.location}</span>
                </div>
                
                <div className="property-details">
                  <div className="detail-item">
                    <Bed size={16} />
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="detail-item">
                    <Bath size={16} />
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="detail-item">
                    <Square size={16} />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <div className="property-price">
                  <span className="price">{property.price}</span>
                  <button className="btn btn-outline">
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="properties-cta">
          <button className="btn btn-primary">
            View All Properties
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties; 