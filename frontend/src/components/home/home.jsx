import React , { useState, useEffect } from 'react';
import './home.css'
import banner from '../../images/travelogobanner.mp4';
import { Button, Card } from 'react-bootstrap';
import travel_blog from '../../images/Travel_Blog.png';
import Footer from '../footer/footer';
const imageURL = 'http://localhost:3001/posters'




function Home() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setBlogs(data);
    };

    fetchData();
  }, []);
  

  return(
    <div className='home_body'>
   <video autoPlay loop className='travel_banner'>
  <source src={banner} type='video/mp4' />
</video>

<img  src={travel_blog} alt="travel_blog" className="travel_blog_header"/>
 <div className='top_cards'>
<h1>Top Places to Visit</h1>
   <div className='travel_cards'>
   
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
   <Footer />
  </div>
 
  );
}

export default Home;
