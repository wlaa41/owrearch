import React from 'react';

interface WhatsAppButtonProps {
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ className }) => {
  const phoneNumber = "+447307565444";
  const companyName = "OW London, Electrician, Smart Home Engineers";

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
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '44px',
          backgroundColor: 'white',
          position: 'fixed',
          left: '25px',
          bottom: '25px',
          padding: '10px',
          fontSize: '30px',
          color: '#25D366',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
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
