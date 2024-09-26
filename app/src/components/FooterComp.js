import React from "react";

export const FooterComp = () => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return (
        <div style={{height: "400px", backgroundColor: "#fffedd", color: "black", borderTop: "6px solid"}}>
            <div style={{margin: "auto", width: "1600px", height: "100%"}}>
                <div className="footer-links-socials-container" style={{height:"80%"}}>
                    <div className="footer-guides">
                        <ul className="footer-links bayon-regular" style={{padding: "20px", listStyle: "none"}}>
                            <li><a href="/accreditation">Accredition</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-guides">
                        <div style={{padding: "20px"}}>
                            <p>Follow Us On Our Socials</p>
                            <div style={{display: "flex", justifyContent: "end"}}>
                                <a target="blank" href="https://github.com/TazzyPan19"><img src={"..."} alt="Github Icon" /></a>
                                <a href="/facebook"><img src={"..."} alt="Facebook Icon"/></a>
                                <a href="/figma"><img src={"..."} alt="Figma Icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "flex-end", height: "20%"}}>
                    <p style={{padding: "20px", marginBottom: "0rem"}}>Icons, data and images are used for educational purposes. All rights reserved by Zesty Recipe-Bites 2024.</p>
                </div>
            </div>
        </div>
        )
  }

  export default FooterComp;