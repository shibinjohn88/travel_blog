import React from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap';
import './destination.css';
import searchBanner from '../../images/Travelog.jpg';
import plane from '../../images/plane.gif';

function SearchBar() {
  return (
    <div className='destination_container'>
    <img  src={searchBanner} alt="travel_blog" className="travel_blogger"/>
    <div className="search-container">
    <img src={plane} className="plane" alt="plane flying" />

        <Form className='search_bar'>
        <FormControl type="text" placeholder="Search" />
            <Button>Search</Button>
          </Form>
    
    </div>
    </div>
  );
}

export default SearchBar; 

