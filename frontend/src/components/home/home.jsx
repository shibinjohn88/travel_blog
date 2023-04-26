import React from 'react';
import './home.css'
import banner from '../../images/travelogobanner.mp4';
import { Button, Card } from 'react-bootstrap';
import island from '../../images/island.jpeg';




function Home() {
  return(
    <div className='home_body'>
   <video autoPlay loop className='travel_banner'>
  <source src={banner} type='video/mp4' />
</video>


   <h1>Welcome to Travelog</h1>

   <div className='travel_cards'>
   <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='card_button'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={island} />
      <Card.Body>
        <Card.Title>My Card</Card.Title>
        <Card.Text>
          your favorite island
        </Card.Text>
        <Button className='cardButton'>Blog</Button>
      </Card.Body>
    </Card>

   </div>
  </div>
  );
}

export default Home;
