import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactBox}>
                <h2 className={styles.heading}>Contact Us</h2>
                <p className={styles.subheading}>We'd love to hear from you!</p>

                <form>
                    <input className={styles.input} type="text" placeholder="Your Name" required />
                    <input className={styles.input} type="email" placeholder="Your Email" required />
                    <textarea className={styles.textarea} placeholder="Your Message" required></textarea>
                    <button className={styles.button} type="submit">Send</button>
                </form>

                <div className={styles.contactDetails}>
                    <p>Email: culturalfest2025@nitjsr.ac.in</p>
                    <p>Phone: +91 657 123 4567</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
