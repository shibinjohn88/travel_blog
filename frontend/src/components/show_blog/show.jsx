import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './show.css'

function Show() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    
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
    }, [id]);
  
    if (!blog) {
      return <div>Loading...</div>;
    }


    return (
      <div className='show_body'>
        {blog && (
          <Card className='show_card'>
          <Card.Img variant="top" src={blog.blog_poster} />
          <Card.Body>

    <Card.Title>{blog.blog_title}</Card.Title>
    <Card.Subtitle>{blog.blog_place}, {blog.blog_country}</Card.Subtitle>
    <Card.Text>{blog.blog_description}</Card.Text>
    <Card.Text>{blog.blog_article}</Card.Text>
    <Card.Text>Written by: {blog.blog_author && blog.blog_author.username ? blog.blog_author.username : "Unknown"}</Card.Text>
    </Card.Body>
</Card>
        )}
        </div>
    )
  }


export default Show