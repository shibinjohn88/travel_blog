import React , { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import './bloglist.css';
import {SiYourtraveldottv} from 'react-icons/si';
import bloggy from '../../images/bloggy.gif';


function Bloglist() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/blogs/user`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
          const data = await response.json();
          setBlogs(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    
  return (
    <div className='blog_body'> 
    <h1>Blog List <SiYourtraveldottv /></h1>
    <br />
    <hr />
    <img  src={bloggy} alt="bloggy character" className="bloggy"/>
    <br />
    <a className="blog_link" href="./createblog">Create a Blog</a>
    <hr />
          <div className='blog_cards'>
   
    {blogs.map((Blog) => (
           <Card className='blog_card' key={Blog.id}>
             <Card.Img variant="top" src={Blog.blog_poster} />
             <Card.Body>
               <Card.Title>{Blog.blog_title}</Card.Title>
               <Card.Title>{Blog.blog_place}</Card.Title>
               <Card.Title>{Blog.blog_country}</Card.Title>
               <Card.Text>{Blog.blog_highlights}</Card.Text>
               <Button className='blog_card_button'>Edit</Button>
               <Button className='blog_card_button' onClick={async (event) => {
                                const id = event.target.id
                                try {     
                                    const response = await fetch(`api/blogs/${Blog._id}`, {
                                    method: 'delete',
                                    headers: {
                                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                                  }
                                }

                                    )
                                    window.location.reload(false)
                                } catch(err) {
                                    console.error(`Error: ${err}`)
                                }
                            }}>Delete</Button>
             </Card.Body>
           </Card>
 
   ))}
     </div>
     </div>
  )
}

export default Bloglist