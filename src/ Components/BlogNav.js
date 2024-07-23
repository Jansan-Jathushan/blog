import React from 'react';
import logo from './blog.png';

const BlogNav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Blog Platform</span>
      </div>
      <div className="right-side">
      <div className="links">
        <a href="#post1">JavaScript</a>
        <a href="#post2">Data Stucture</a>
        <a href="#post3">Alogorithm</a>
        <a href="#post4">Computer Network</a>
      {/* </div> */}
      {/* <div className="search-bar"> */}
        <input type="text" placeholder="Search..." />
      </div>
      </div>
    </nav>
  );
}

export default BlogNav;