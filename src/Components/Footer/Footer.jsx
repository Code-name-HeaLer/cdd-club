import React from "react";
import "./Footer.css";

// icons
import insta from '../../assets/footer-icons/instagram.png'
import linkedin from '../../assets/footer-icons/linkedin.png'
import twitter from '../../assets/footer-icons/twitter.png'
import github from '../../assets/footer-icons/github.png'

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2024 CDD Club PMEC. All rights reserved</p>
            <ul>
                <a href="https://www.instagram.com/cdd_club_pmec/"><li><img src={insta} alt="" /></li></a>
                <a href="https://www.linkedin.com/company/coding-design-and-development/"><li><img src={linkedin} alt="" /></li></a>
                <a href="https://x.com/cddclubpmec"><li><img src={twitter} alt="" /></li></a>
                <a href="https://github.com/CodingClubPMEC"><li><img src={github} alt="" /></li></a>
            </ul>
        </div>
    );
};

export default Footer;
