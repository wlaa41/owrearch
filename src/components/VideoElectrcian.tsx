// src\components\ImageOptimizedWithJsonId.tsx
import React from 'react';


const VideoElectrcian: React.FC = () => {
  return (
    <div className="video-container">
      {/* <video autoPlay loop muted playsInline>
        <source src="/videos/emergency-electrician-london.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <video autoPlay loop muted playsInline>
        <source src="/videos/smart-home-automation-installation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video autoPlay loop muted playsInline>
        <source src="/videos/commercial-electrician-services.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoElectrcian;
