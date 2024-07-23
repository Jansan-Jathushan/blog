import React from 'react';
import alg from './algo.png';

const Post1 = () => {
  return (
    <div className="card" style={{ margin: '40px 150px ', width: '60%' }}>
      <img src={alg} alt="Post 1 Image" />
      <h2>Alogorithm</h2>
      <p>An algorithm is a step-by-step procedure or formula for solving a problem. It consists of a sequence of instructions that are followed to achieve a specific goal, such as sorting data or performing calculations.</p>
      <button>Read more</button>
    </div>
  );
}

export default Post1;