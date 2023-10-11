import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import rapidminer1 from '../assets/rapidminer1.png';
import rapidminer2 from '../assets/rapidminer2.png';
import rapidminer3 from '../assets/rapidminer3.png';
import umskal from '../assets/umskal.png';
import dreamcatcher from '../assets/dreamcatcher.png';
import '../styles/Work.css';

export default function Experience() {
  return (
    <div className="Work-container">
      <h1>Participation and Certification</h1>
      <Carousel>
      <div>
          <img src={dreamcatcher} alt="Experience 1" />
          <p className="legend">Dreamcatcher: Angular Front-end</p>
        </div>
        <div>
          <img src={umskal} alt="Experience 2" />
          <p className="legend">UMSKAL Hackaton Participation</p>
        </div>
        <div>
          <img src={rapidminer1} alt="Experience 3" />
          <p className="legend">Rapidminer: Application & Use Cases Professional</p>
        </div>
        <div>
          <img src={rapidminer2} alt="Experience 4" />
          <p className="legend">Rapidminer: Machine Learning Professional </p>
        </div>
        <div>
          <img src={rapidminer3} alt="Experience 5" />
          <p className="legend">Rapidminer: Data Engineering Professional</p>
        </div>
        
      </Carousel>
    </div>
  );
}
