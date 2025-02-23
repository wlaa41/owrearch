import React from 'react';
import './WhatsAppButton.css'
interface WhatsAppButtonProps {
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ className }) => {
  const phoneNumber = "+447307565444";
  const companyName = "ROQAI OW Research";

  return (
    <div className={`whatsapp-container ${className}`} id='whatsappcontainer' itemScope itemType="http://schema.org/Organization">
      <meta itemProp="name" content={companyName} />
      <meta itemProp="telephone" content={phoneNumber} />
      <meta itemProp="url" content={`https://wa.me/${phoneNumber}`} />
      <meta itemProp="logo" content="path_to_company_logo" />

      <a
        href={`https://wa.me/${phoneNumber}`}
        className="whatsapp-fixed"
        target="_blank"
        rel="noopener noreferrer"
 
        aria-label="Contact us on WhatsApp"
        itemProp="sameAs"
      >
        <i className="bx bxl-whatsapp" 
          style={{ 
            fontSize: '69px',
            height: '66px',
            width:'66px' 
          }} 
          aria-hidden="true">
        </i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
