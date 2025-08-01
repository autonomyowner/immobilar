import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Ahmed Benali",
      position: "Founder & CEO",
      image: "/pics/22.jpg",
      email: "ahmed@immobilar.com",
      phone: "+213 557 30 40 04"
    },
    {
      name: "Sarah Mansouri",
      position: "Senior Real Estate Advisor",
      image: "/pics/23.jpg",
      email: "sarah@immobilar.com",
      phone: "+213 557 30 40 05"
    },
    {
      name: "Karim Boudiaf",
      position: "Property Consultant",
      image: "/pics/245.jpg",
      email: "karim@immobilar.com",
      phone: "+213 557 30 40 06"
    },
    {
      name: "Nadia Zerrouki",
      position: "Investment Specialist",
      image: "/pics/444.jpg",
      email: "nadia@immobilar.com",
      phone: "+213 557 30 40 07"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="section-header">
          <h2 className="section-title">Our Expert Team</h2>
          <p className="section-subtitle">Meet the professionals dedicated to finding your perfect property</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-member-img"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <div className="team-contact">
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>{member.email}</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 