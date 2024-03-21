import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
 
function Header() {
    return (
        <header className='header'>
            <Router>
                <nav>
                    <ul>
                        
                        <Link to="/pokedex">Pokédex</Link>
                    </ul>
                </nav>
            </Router>
        </header>
    );
}
 
export default Header;
 