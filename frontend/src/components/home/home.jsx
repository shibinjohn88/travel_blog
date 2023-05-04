import React , { useState, useEffect } from 'react';
import './home.css'
import banner from '../../images/travelogobanner.mp4';
import { Card } from 'react-bootstrap';
import {SiYourtraveldottv} from 'react-icons/si'
import travel_blog from '../../images/Travel_Blog.png';
import plane2 from '../../images/plane2.gif';







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
<br />
<img src={plane2} className="plane2" alt="plane flying" />
   <div className='travel_cards'>
   
   {topBlogs.map((Blog) => (
          <Card className='card' key={Blog._id}>
            <Card.Img variant="top" src={Blog.blog_poster} />
            <Card.Body>
      
              <Card.Title className='blog_place'> {Blog.blog_place} <hr /> {Blog.blog_title}</Card.Title>
           
              <button className='like_button' id={Blog._id} onClick={async (e) => {
                    const id = e.target.id
                    window.location.replace(`/show_blog/ ${Blog._id}`)
                }}>Blog</button>
            </Card.Body>
          </Card>

  ))}
    </div>

   </div>
   
  </div> 
 
  );
}

export default Home;
