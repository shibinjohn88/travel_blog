import React, { useState, useEffect } from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap';
import './destination.css';
import searchBanner from '../../images/Travelog.jpg';
import plane from '../../images/plane.gif';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchData();
  }, []);
  
    const handleSearch = async () => {
      const response = await fetch(`/api/blogs/destination/${searchTerm}`);
      const data = await response.json();
      setBlogs(data);
      console.log(blogs)
    };


  return (
    <div className='destination_container'>
    <img  src={searchBanner} alt="travel_blog" className="travel_blogger"/>
    <img src={plane} className="plane" alt="plane flying" />
    <div className="search_container">
    
    <Form className='search_bar'>
          <FormControl
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </Form>
    
    </div>
    <div className='destination_cards'>
        {blogs.map((blog) => (
          <Card className='card' key={blog.id}>
            <Card.Img variant="top" src={blog.blog_poster} />
            <Card.Body>
              <Card.Title>{blog.blog_title}</Card.Title>
              <Card.Title>{blog.blog_place}</Card.Title>
              <Card.Title>{blog.blog_country}</Card.Title>
              <Card.Text>{blog.blog_highlights}</Card.Text>
              <Button className='card_button'>Blog</Button>
            </Card.Body>
          </Card>
        ))} 
      </div>
    </div>
  );
}

export default SearchBar; 

