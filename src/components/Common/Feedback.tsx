"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

import clientImg1 from "/public/images/client-image/client1.jpg";
import clientImg2 from "/public/images/client-image/client2.jpg";
import clientImg3 from "/public/images/client-image/client3.jpg";
import clientImg4 from "/public/images/client-image/client4.jpg";
import clientImg5 from "/public/images/client-image/client5.jpg";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

const Feedback: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>What users Saying</h2>
            <div className="bar"></div>
            <p>
              Discover what our customers think about our services. Their feedback reflects our commitment to delivering exceptional service and expert solutions for all electrical and security needs.
            </p>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src="https://lh3.googleusercontent.com/a-/ALV-UjUmIPeEgRibo6PpMZl0H3n2xWAKIGYFCPOBfIAKWAj4lZuBWOE=w90-h90-p-rp-mo-br100" alt="Fernando Ferdov" width={95} height={95} />
                  </div>
                  <h3>Fernando Ferdov</h3>
                  <span>Project Enthusiast</span>
                  <p>Highly recommend this electrician! His knowledge is at a very high level. Needed extra lighting installed for my project, and he gave excellent advice on working around the camper van electric system. Very happy with the final result. He is my go-to electrician now. Thank you!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src="https://lh3.googleusercontent.com/a-/ALV-UjX4Nh_Igzh2D42BLVBTQ6EgqKnhqLwHOvs53kWqf-izmleX6y2k=w90-h90-p-rp-mo-br100" alt="Petr Svacina" width={95} height={95} />
                  </div>
                  <h3>Petr Svacina</h3>
                  <span>Homeowner</span>
                  <p>Just had a fantastic crew come over to set up my Ring security system, complete with a four-camera CCTV and door/window sensors at my house. They nailed the installation and cleverly tweaked the sensor placements for better security—all on the house. Highly recommend their first-rate service!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src="https://lh3.googleusercontent.com/a-/ALV-UjXoXHjxGpyfahlxDR010ZQf3l-lDzaT6m6sT3Pw_lCjQv3VXZTm=w90-h90-p-rp-mo-br100" alt="Raphael Pedrini" width={95} height={95} />
                  </div>
                  <h3>Raphael Pedrini</h3>
                  <span>Happy Client</span>
                  <p>Really good service, very kind and efficient. Would recommend!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src="https://lh3.googleusercontent.com/a-/ALV-UjXFuzM4KIgvIdF-Y4Cb58IHBjkJtYVbX6yXaH75Wmi3uPZkdKX-=w90-h90-p-rp-mo-br100" alt="Tom M." width={95} height={95} />
                  </div>
                  <h3>Tom M.</h3>
                  <span>Resident</span>
                  <p>Changed my fuse box and certified the work. He responds quickly and works even on weekends if needed. Excellent electrical services!</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src={shape1}
            alt="shape"
            width={202}
            height={202}
          />
        </div>
        <div className="shape2 rotateme">
          <Image
            src={shape2}
            alt="shape"
            width={22}
            height={22}
          />
        </div>
        <div className="shape3">
          <Image
            src={shape3}
            alt="shape"
            width={28}
            height={28}
          />
        </div>
        <div className="shape4">
          <Image
            src={shape4}
            alt="shape"
            width={21}
            height={20}
          />
        </div>
        <div className="shape5">
          <Image
            src={shape5}
            alt="shape"
            width={182}
            height={146}
          />
        </div>
        <div className="shape6 rotateme">
          <Image
            src={shape4}
            alt="shape"
            width={21}
            height={20}
          />
        </div>
        <div className="shape7">
          <Image
            src={shape4}
            alt="shape"
            width={21}
            height={20}
          />
        </div>
        <div className="shape8 rotateme">
          <Image
            src={shape2}
            alt="shape"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
}

export default Feedback;
