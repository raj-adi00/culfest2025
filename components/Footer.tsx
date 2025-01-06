import React from "react";
import styles from "../styles/Footer.module.css";

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeHeading}>Welcome to CULFEST' 2025!</h1>
        <p className={styles.welcomeText}>
          Join us for an unforgettable experience at <br /> NIT Jamshedpur.
          Celebrate culture, creativity, and <br />
          community with us.
        </p>
      </div>
      <div className={styles.contactDetailsSection}>
        <h2 className={styles.contactHeading}>Contact Information</h2>
        <p>NIT Jamshedpur</p>
        <p>JAMSHEDPUR, Jharkhand, PIN: 831014</p>
        <p>Email: amrishrock2002@gmail.com </p>
        <p>Phone: 9118841006</p>
      </div>
      <div className={styles.socialMediaSection}>
        <ul className={styles.socialIcons}>
          <li className={styles.iconContent}>
            <a
              href="https://www.facebook.com/utk.nitjsr"
              data-social="facebook"
            >
              <span className={styles.tooltip}>Facebook</span>
              <span className={styles.filled}></span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.96 3.64 9.04 8.38 9.9v-7h-2.5v-3h2.5v-2.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.5c-1.5 0-2 .9-2 1.9v2.1h3.4l-.5 3h-2.9v7c4.74-.86 8.38-4.94 8.38-9.9 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
          </li>
          <li className={styles.iconContent}>
            <a
              href="https://www.instagram.com/culfest.nitjsr/"
              data-social="instagram"
            >
              <span className={styles.tooltip}>Instagram</span>
              <span className={styles.filled}></span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm8 2H9C5.92 4 4 5.92 4 9v6c0 3.08 1.92 5 5 5h6c3.08 0 5-1.92 5-5V9c0-3.08-1.92-5-5-5zm2.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </a>
          </li>
          <li className={styles.iconContent}>
            <a
              href="https://youtu.be/bxKik1HMUho?si=OksBdejD-o3reLfo"
              data-social="youtube"
            >
              <span className={styles.tooltip}>YouTube</span>
              <span className={styles.filled}></span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.615 3.184a3.14 3.14 0 00-2.204-2.204C15.845.6 12 .6 12 .6s-3.845 0-5.411.38a3.14 3.14 0 00-2.204 2.204C3.996 5.4 3.996 8.85 3.996 8.85s0 3.45.389 5.616a3.14 3.14 0 002.204 2.204c1.566.38 5.411.38 5.411.38s3.845 0 5.411-.38a3.14 3.14 0 002.204-2.204c.388-2.166.388-5.616.388-5.616s0-3.45-.388-5.616zm-11.078 6.956V6.614l5.558 3.261-5.558 3.265z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
