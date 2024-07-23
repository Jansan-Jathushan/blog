import React from 'react';

import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';

const Posts = () => {
  return (
    <div>
      <section id="post1">
        <Post1 />
      </section>
      <section id="post2">
        <Post2 />
      </section>
      <section id="post3">
        <Post3 />
      </section>
      <section id="post4">
        <Post4 />
      </section>
    </div>
  );
}

export default Posts;