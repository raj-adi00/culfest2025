import React from "react";

const Footer: React.FC = () => {
    return (
        <footer style={{ padding: "1rem", backgroundColor: "#f8f9fa", textAlign: "center" }}>
            <div>
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:support@yourdomain.com">support@yourdomain.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                <p>Address: 123 Main Street, Your City</p>
            </div>
            <hr style={{ margin: "1rem 0", border: "none", borderTop: "1px solid #ddd" }} />
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
