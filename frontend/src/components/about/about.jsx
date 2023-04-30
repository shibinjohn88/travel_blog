import React from 'react';
import './about.css';
import hansel from '../../images/hansel.JPG';
import shibin from '../../images/island.jpeg';

function HelloWorld() {
  return (
    <div class="about-me-card">
      <img src={hansel} alt="Profile Picture" />
      <h2>Hansel Quiroz</h2>
      <p>I am a software engineer with a passion for building web applications.</p>
      <h3>Places I have visited:</h3>
      <ul>
        <li>Dominican Republic, Mexico</li>
        <li>Jamaica, Belize</li>
        <li>New York City, USA</li>
      </ul>
      <br />
      <hr />
      <img src={shibin} alt="Profile Picture" />
      <h2>Shibin John</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque enim liber</p>
      <h3>Places I have visited:</h3>
      <ul>
        <li>Paris, France</li>
        <li>Tokyo, Japan</li>
        <li>New York City, USA</li>
      </ul>
    </div>
  );
}

export default HelloWorld;
