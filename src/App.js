import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogNav from './ Components/BlogNav';
import Posts from './ Components/Posts';
import Post1 from './ Components/Post1';
import Post2 from './ Components/Post2';
import Post3 from './ Components/Post3';
import Post4 from './ Components/Post4';


function App() {
  return (
    <>
    
    <BlogNav/>
  <Routes>
          <Route path="/blog" element={<Posts />} />
          <Route path="/Post1" element={<Post1 />} />
          <Route path="/Post2" element={<Post2 />} />
          <Route path="/Post3" element={<Post3 />} />
          <Route path="/Post4" element={<Post4 />} />
        </Routes>
  
   </>
    
    

  

    

    
  );
}

export default App;