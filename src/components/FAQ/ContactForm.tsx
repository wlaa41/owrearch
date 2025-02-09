"use client";

import React, { useState } from "react";
import Link from "next/link";
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked,
    }));
  };

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (number: string) => {
    const re = /^07\d{9}$/;
    return re.test(number);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!validatePhoneNumber(formData.number)) {
      alert('Phone number must be in the form 07123456789.');
      return;
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        console.error("EmailJS environment variables are not set.");
        return;
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
      );
      console.log('Email successfully sent!', result.text);
      // Reset form or show a success message
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        text: "",
        agreeTerms: false,
      });
    } catch (error) {
      console.error('Failed to send the email.', error);
      // Handle the missing environment variable error appropriately
    }
  };


  return (
    <>
      <div className="faq-contact">
        <h3>Ask Your Question</h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Your email address"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  placeholder="Your phone number"
                  className="form-control"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="text"
                  cols={30}
                  rows={6}
                  placeholder="Write your message..."
                  className="form-control"
                  value={formData.text}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleCheckboxChange}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  By checking this, you agree to our{" "}
                  <Link href="/terms-conditions" >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" >
                    Privacy policy
                  </Link>
                  .
                </label>
              </div>
            </div>

            <div className="col-lg-12 col-sm-12 text-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
