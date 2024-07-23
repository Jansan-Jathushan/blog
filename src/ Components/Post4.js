import React from 'react';
import cn from './network.jpg';

const Post4 = () => {
  return (
    <div className="card" style={{ margin: '40px 150px ', width: '60%' }}>
      <img src={cn} alt="Post 1 Image" />
      <h2>Computer Network</h2>
      <p>A computer network is a system of interconnected devices that communicate and share resources. Networks enable data exchange between computers, allowing for internet access, file sharing, and communication services like email and instant messaging. They can range from small local networks (LANs) to vast global networks (WANs), such as the internet.

</p>
      <button>Read more</button>
    </div>
  );
}

export default Post4;