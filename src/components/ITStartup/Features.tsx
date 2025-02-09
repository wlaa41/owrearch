import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const phoneNumber = "+447307565444";

const Features = () => {
  return (
    <>
      <div className="boxes-are ">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box">
                <div className="icon">
                  <Icon.Home />
                </div>
                <h3>
                  <Link href="/services/domestic-electrician-services-london/">
                    Domestic Electrician
                  </Link>
                </h3>
                <p>
                  Our team of fully qualified, approved, and seasoned contractors is ready to deliver exceptional services. Our domestic electricians are available 24/7, always prepared to assist you whenever needed. Contact us at <a href="tel:+447307565444" itemProp="telephone" aria-label="Call us at 07307 565 444">07307 565 444</a> or reach out on WhatsApp <a href={`https://wa.me/${phoneNumber}`} className="whatsapp-fixed" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }} aria-label="Contact us on WhatsApp" itemProp="sameAs">here</a>.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-f78acb">
                <div className="icon">
                  <Icon.Box />
                </div>
                <h3>
                  <Link href="/services/commercial-electrician-contractors-london/">
                    Commercial Electrical Services
                  </Link>
                </h3>
                <p>
                  We offer a wide array of commercial electrical services in London. For more details, visit our Services page. Our 2-hour emergency electrician response is available 24/7, ensuring your business stays operational without delays.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-c679e3">
                <div className="icon">
                  <Icon.Archive />
                </div>
                <h3>
                  <Link href="/services/industrial-electrician-services-london/">
                    Industrial Electrical Services
                  </Link>
                </h3>
                <p>
                  Our team is fully equipped to handle all your industrial electrical needs in London. You can rely on our experienced industrial electricians and London electrical contractors to deliver exceptional service and a seamless experience. For immediate assistance, call <a href="tel:+447307565444" itemProp="telephone" aria-label="Call us at 07307 565 444">07307 565 444</a> or contact us on WhatsApp <a href={`https://wa.me/${phoneNumber}`} className="whatsapp-fixed" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }} aria-label="Contact us on WhatsApp" itemProp="sameAs">here</a>.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.GitBranch />
                </div>
                <h3>
                  <Link href="/services/pat-testing-electrical-safety-london/">
                    Electrical Testing Services
                  </Link>
                </h3>
                <p>
                  We are committed to guiding our customers through the entire PAT testing process. Our certified electricians in London provide a comprehensive package of electrical testing and results to ensure full compliance with all regulations. Our services include electrical inspection and electrical safety certificates in London.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.Video />
                </div>
                <h3>
                  <Link href="/services/alarm-installation-systems-london/">
                    Alarm and CCTV Services
                  </Link>
                </h3>
                <p>
                  We are ready to provide comprehensive alarm services, including new system installations and repairs. Additionally, we offer 24/7 emergency services to ensure your security needs are always met. For top-quality security, look no further than our trusted CCTV installation and alarm services in London.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.Code />
                </div>
                <h3>
                  <Link href="/services/lighting-installation-electricians-london/">
                    Lighting Installation Services
                  </Link>
                </h3>
                <p>
                  We offer top-notch lighting installation services in London. Whether you need emergency lighting or security lighting for your business or home, our certified electricians are ready to help. For all your lighting needs, from LED lighting installation to outdoor security lighting, trust our experienced team. Get in touch at <a href="tel:+447307565444" itemProp="telephone" aria-label="Call us at 07307 565 444">07307 565 444</a> or message us on WhatsApp <a href={`https://wa.me/${phoneNumber}`} className="whatsapp-fixed" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }} aria-label="Contact us on WhatsApp" itemProp="sameAs">here</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
