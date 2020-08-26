import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {  
    const { links } = props;
    return(
        <nav className='Top-nav'>
        {
        links.map((l, idx) => {
            return <Link to={l.to} key={idx} className='Nav-link'>{l.name}</Link>;
        }) 
        }
        </nav>
    );
}