import React , { useState, useEffect } from 'react';
import './home.css'
import banner from '../../images/travelogobanner.mp4';
import { Button, Card } from 'react-bootstrap';
import travel_blog from '../../images/Travel_Blog.png';
import Footer from '../footer/footer';
const imageURL = 'http://localhost:3001/posters'




function Home() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch(imageURL)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
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
   
 {posts.map(post => (

    <Card className='card' key={post.id}>
     <Card.Img variant="top" src={post.image} />
    <Card.Body>
    <Card.Title>{post.title}</Card.Title>
    <Card.Title>{post.place}</Card.Title>
  <Card.Title>{post.country}</Card.Title>
     <Card.Text>{post.highlights}</Card.Text>
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
