import React from 'react';
import {Link} from 'react-router-dom';


function NavBar(){
    return(
        <div className='navbar'>
            <ul className="navbar__list">
                <li className="navbar__list-item"><Link to='/'>Home</Link></li>
                <li className="navbar__list-item"><Link to='/course'>Course</Link></li>
                <li className="navbar__list-item"><a href="">Contact</a></li>
            </ul>
        </div>
    );
}

export default NavBar;