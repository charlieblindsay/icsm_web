import React from 'react';
import Logo from '../img/icsm-logo.png';
import {Link} from 'react-router-dom';

function Footer(){
    return (
              <footer className="footer margin-small-above">
                <img src={Logo} alt="" height="60%"/>
                <hr className='hr-footer'></hr>
                <ul className="footer__list">
                    <li className="footer__item"><a href="https://www.union.ic.ac.uk/medic/coding/" className="footer__link" target="_blank">icsm coding</a></li>
                    <li className="footer__item"><a href="https://www.imperialcollegeunion.org/activities/a-to-z/coding-medics" className="footer__link">Membership</a></li>

                    <li className="footer__item"><Link className="footer__link" to='/team'>Team</Link></li>
                </ul>
            </footer>
    );
}

export default Footer;