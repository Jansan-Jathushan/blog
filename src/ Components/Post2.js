import React from 'react';
import data from './data.png';

const Post1 = () => {
  return (
    <div className="card" style={{ margin: '40px 150px ', width: '60%' }}>
      <img src={data} alt="Post 1 Image" />
      <h2>Data stucture</h2>
      <p>JavaScript is a dynamic programming language used to create interactive effects within web browsers. It enables developers to build complex features like animations, form validations, and real-time updates, making websites more engaging and user-friendly. JavaScript is essential for modern web development, working seamlessly with HTML and CSS..</p>
      <button>Read more</button>
    </div>
  );
}

export default Post1;