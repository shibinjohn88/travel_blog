import React from 'react';
import './home.css'
import banner from '../../images/travelogobanner.mp4';
import { Button, Card } from 'react-bootstrap';
import island from '../../images/island.jpeg';
import travel_blog from '../../images/Travel_Blog.png';
import Footer from '../footer/footer';




function Home() {
  return(
    <div className='home_body'>
   <video autoPlay loop className='travel_banner'>
  <source src={banner} type='video/mp4' />
</video>

<img  src={travel_blog} alt="travel_blog" className="travel_blog_header"/>
 <div className='top_cards'>
<h1>Top Places to Visit</h1>
   <div className='travel_cards'>
   
   <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Title>Place</Card.Title>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          Highlights
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>
    </div>

   </div>
   <Footer />
  </div>
 
  );
}

export default Home;
