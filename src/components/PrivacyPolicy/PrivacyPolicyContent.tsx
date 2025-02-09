
import Link from "next/link";
import React from "react";


const PrivacyPolicyContent = () => {
  return (
    <>
      <div className="main-text-area ptb-80">
        <div className="container">
          <h3>Welcome to our Privacy Policy</h3>
          <p>
            OW London, Electrician, Smart Home Engineers is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We may collect and process the following data about you:
            <ul>
              <li>Information you provide by filling in forms on our website.</li>
              <li>Details of transactions you carry out through our site and of the fulfillment of your orders.</li>
              <li>Details of your visits to our site and the resources you access.</li>
            </ul>
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            We use information held about you in the following ways:
            <ul>
              <li>To provide you with information, products, or services that you request from us or which we feel may interest you.</li>
              <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our service.</li>
            </ul>
          </p>

          <h3>Data Security</h3>
          <p>
            We take the security of your personal information seriously and use various technologies and procedures to help protect your personal data from unauthorized access, use, or disclosure. We store personal information you provide on computer systems that have limited access and are in controlled facilities.
          </p>

          <h3>Your Rights</h3>
          <p>
            You have the right to access information held about you. Your right of access can be exercised in accordance with the UK Data Protection Act. Any access request may be subject to a fee to meet our costs in providing you with details of the information we hold about you.
          </p>

          <h3>Contact</h3>
          <p>
            Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to our support team via our <Link href="/contact">contact page</Link>.
          </p>
          
          <p>
            This privacy policy was last updated on 2024.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
