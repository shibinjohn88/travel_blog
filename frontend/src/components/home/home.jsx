import React , { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import './home.css'
import banner from '../../images/travelogobanner.mp4';
import { Button, Card } from 'react-bootstrap';
import {SiYourtraveldottv} from 'react-icons/si'
import travel_blog from '../../images/Travel_Blog.png';
import Footer from '../footer/footer';




function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/blogs/`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  const topBlogs = blogs.sort(() => 0.5 - Math.random()).slice(0, 6);

  return(
    <div className='home_body'>
   <video autoPlay loop className='travel_banner'>
  <source src={banner} type='video/mp4' />
</video>

<img  src={travel_blog} alt="travel_blog" className="travel_blog_header"/>
 <div className='top_cards'>
<h1>Top Places to Visit <SiYourtraveldottv /></h1>
   <div className='travel_cards'>
   
   {topBlogs.map((Blog) => (
          <Card className='card' key={Blog.id}>
            <Card.Img variant="top" src={Blog.blog_poster} />
            <Card.Body>
              <Card.Title>{Blog.blog_title}</Card.Title>
              <Card.Title>{Blog.blog_place}</Card.Title>
              <Card.Title>{Blog.blog_country}</Card.Title>
              <Card.Text>{Blog.blog_highlights}</Card.Text>
              <Link to="../show_blog">
              <Button className='card_button'>Blog</Button>
              </Link>
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
