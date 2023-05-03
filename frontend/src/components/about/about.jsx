import React from 'react';
import './about.css';
import hansel from '../../images/moon.jpeg';
import shibin from '../../images/island.jpeg';
import yugma from '../../images/sunset.jpeg';


function HelloWorld() {
  return (
    <div className="about">
    <div class="about-me-card">

 <div className='hansel'>
      <img src={hansel} alt="Profile Picture" />
      <h2>Hansel Quiroz</h2>
      <p>I am a software engineer with a passion for building web applications.</p>
      <h3>My role in this project:</h3>
      <p>Front-End</p>
      <h3>Places I have visited:</h3>
      <ul>
        <li>Dominican Republic, Mexico</li>
        <li>Jamaica, Belize</li>
        <li>New York City, USA</li>
      </ul>
      <br />
      <hr />
  </div>

  <div className='shibin'>
      <img src={shibin} alt="Profile Picture" />
      <h2>Shibin John</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim liber</p>
      <h3>My role in this project:</h3>
      <p>Back-End</p>
      <h3>Places I have visited:</h3>
      <ul>
        <li>Paris, France</li>
        <li>Tokyo, Japan</li>
        <li>New York City, USA</li>
      </ul>
      <br />
      <hr />
  </div>

  <div className='yugma'>
      <img src={yugma} alt="Profile Picture" />
      <h2>yugma</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim liber</p>
      <h3>My role in this project:</h3>
      <p>Authentication</p>
      <h3>Places I have visited:</h3>
      <ul>
        <li>Paris, France</li>
        <li>Tokyo, Japan</li>
        <li>New York City, USA</li>
      </ul>
  </div>

    </div>
    </div>
    
  );
}

export default HelloWorld;
