import React from 'react';
import { Link } from "react-router-dom";


import logo from './blog.png';

const BlogNav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Blog Platform</span>
      </div>
      <div className="right-side">
      <ul className="nav">
                        <li><Link to="/Post1">Java Script</Link></li>
                        <li><Link to="/Post2">Data Stucture</Link></li>
                        <li><Link to="/Post3">Algorithm</Link></li>
                        <li><Link to="/Post4">Computer Network</Link></li>
                    </ul>  
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      </div>
    </nav>
  );
}

export default BlogNav;