import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mohammed Benali",
      position: "Business Owner",
      content: "Immobilar helped me find the perfect investment property. Their expertise and professionalism exceeded my expectations. Highly recommended!",
      rating: 5,
      image: "/pics/4545.jpg"
    },
    {
      id: 2,
      name: "Fatima Mansouri",
      position: "Property Investor",
      content: "The team at Immobilar is exceptional. They understand the market perfectly and guided me through every step of the buying process.",
      rating: 5,
      image: "/pics/456456456.jpg"
    },
    {
      id: 3,
      name: "Karim Boudiaf",
      position: "Home Buyer",
      content: "I was impressed by their attention to detail and commitment to finding exactly what I was looking for. Excellent service!",
      rating: 5,
      image: "/pics/45646546.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by hundreds of satisfied clients across Algeria</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-image">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="client-img"
                  />
                </div>
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-position">{testimonial.position}</p>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <div className="testimonial-content">
                <Quote size={20} className="quote-icon" />
                <p className="testimonial-text">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 