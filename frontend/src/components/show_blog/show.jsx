import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {FaThumbsUp} from 'react-icons/fa'
import './show.css'
import bloggo from '../../images/BLOG.gif';

function Show() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [count, setCount] = useState(0)
    const handleLike = () => {
      setCount(count + 1);
    }
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/blogs/${id}`);
          const data = await response.json();
          console.log(data);
          setBlog(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    if (!blog) {
      return <div>Loading...</div>;
    }
   
   

    return (
      <div className='show_container'>
        <img src={bloggo} className="bloggo" alt="blog header" />
      <div className='show_body'>
       
        {blog && (
          
          <Card className='show_card'>
             
  <Card.Body className='card_body'>
 
  <Card.Title>{blog.blog_title}</Card.Title>
  <Card.Img variant="top" src={`/${blog.blog_poster}`} />
    
    <Card.Subtitle className='blog_place'>{blog.blog_place}, {blog.blog_country}</Card.Subtitle>
    <Card.Text className='blog_description'>{blog.blog_description}</Card.Text>
    <Card.Text className='blog_article'>Blog: <br /> <hr />{blog.blog_article} <br/> 
     <button className='like_button' onClick={handleLike}><span>{count} <FaThumbsUp/> </span></button>
     
      </Card.Text>
<Card.Text className='blog_author'>Written by: {blog.blog_author.username}
</Card.Text>
  </Card.Body>

</Card>
        )}
        </div>
        </div>
    )
  }


export default Show