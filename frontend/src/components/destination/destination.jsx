import React, { useState, useEffect } from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap';
import './destination.css';

import plane from '../../images/plane.gif';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/blogs/');
      const data = await response.json();
      setBlogs(data);
    };

    fetchData();
  }, []);
  
    const handleSearch = async () => {
      const response = await fetch(`/api/blogs/destination/${searchTerm}`);
      const data = await response.json();
      setBlogs(data);
    };


  return (
    <div className='destination_container'>
    <h1>SEARCH A BLOG</h1>
    <img src={plane} className="plane" alt="plane flying" />
    <div className="search_container">
    
    <Form className='search_bar'>
          <FormControl
            type="text"
            placeholder="ENTER A PLACE"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </Form>
    
    </div>
    <div className='destination_cards'>
        {blogs.map((blog) => (
   <Card className='destination_card' key={blog._id}>
   <Card.Img variant="top" src={blog.blog_poster} />
   <Card.Body>

     <Card.Title className='blog_place'> {blog.blog_place} <hr /> {blog.blog_title}</Card.Title>
  
     <button className='like_button' id={blog._id} onClick={async (e) => {
           const id = e.target.id
           window.location.replace(`/show_blog/ ${blog._id}`)
       }}>Blog</button>
   </Card.Body>
 </Card>
        ))} 
      </div>
    </div>
  );
}

export default SearchBar; 

