import React from 'react';
import './privacyPolicy.css'
import { ArrowCircleLeft24Filled } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy' >
        <Link to='/Registration'>
        <div style={{display:"flex",alignItems:"start",gap:"2px",height:'40px'}}>
        <ArrowCircleLeft24Filled/>
        <p style={{fontSize:"20px",textDecorationLine:'underline'}}>Back</p>
        </div>
        </Link>
      <h1>Privacy Policy:</h1>
      <p>
        GYMRAT is committed to protecting the privacy and personal information of its users. This privacy policy outlines the types of information we collect, how we use it, and how we protect it.
      </p>
      <h2>Information We Collect:</h2>
      <p>
        When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, and access times. We also collect information about your browsing behavior, such as the pages you view, the links you click, and other actions you take on our website.
      </p>
      <p>
        Additionally, if you choose to create an account with us, we will collect personal information such as your name, email address, and billing information.
      </p>
      <h2>How We Use Your Information:</h2>
      <p>
        We use the information we collect to provide and improve our services to you, such as processing your orders, providing customer service, and personalizing your experience on our website.
      </p>
      <p>
        We may also use your information for marketing and advertising purposes, such as sending you promotional emails or displaying targeted advertisements on our website or through third-party platforms.
      </p>
      <h2>How We Protect Your Information:</h2>
      <p>
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard encryption technology to protect your sensitive data and limit access to your personal information to authorized personnel only.
      </p>
      <h2>Sharing Your Information:</h2>
      <p>
        We do not sell, rent, or otherwise disclose your personal information to third parties without your consent. However, we may share your information with our service providers who assist us in providing our services to you, such as payment processors, shipping providers, and marketing partners.
      </p>
      <h2>Your Choices:</h2>
      <p>
        You may choose to opt-out of receiving promotional emails from us at any time by following the unsubscribe link at the bottom of our emails. You may also update your personal information or close your account by logging into your account or contacting us at [insert contact information].
      </p>
      <h2>Changes to Our Privacy Policy:</h2>
      <p>
        We reserve the right to modify or update this privacy policy at any time. If we make significant changes to this policy, we will notify you by email or by posting a notice on our website.
      </p>
      <h2>Contact Us:</h2>
      <p>
        If you have any questions or concerns about our privacy policy or how we use your personal information, please contact us at [<b>gymrat2023@gmail.com</b>].
      </p>
    </div>
  );
};

