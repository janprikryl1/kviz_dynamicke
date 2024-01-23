import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import IconTelephone from "bootstrap-icons/icons/telephone.svg";
import IconEnvelope from "bootstrap-icons/icons/envelope.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faFacebookF,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Cookies from 'universal-cookie';


function Footer() {
    return (
        <footer className="footer">
            <React.Fragment>
                <footer style={{paddingTop: '50px'}}>
                    <div className="container-fluid bg-primary">
                        <div className="row">
                            <div className="col-md-9 py-3 text-white" style={{paddingLeft: "40px"}}>
                                Vytvořil Jan Přikryl
                            </div>
                            <div className="col-md-3 py-3 text-center text-white">
                                <Link to="/" title="Twitter">
                                    <FontAwesomeIcon
                                        icon={faXTwitter}
                                        className="text-light ms-3 me-3"
                                    />
                                </Link>
                                <Link to="/" title="Facebook">
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className="text-light me-3"
                                    />
                                </Link>
                                <Link to="/" title="Instagram">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="text-light me-3"
                                    />
                                </Link>
                                <Link to="/" title="Youtube">
                                    <FontAwesomeIcon icon={faYoutube} className="text-light me-3"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        </footer>
    )
}

export default Footer;