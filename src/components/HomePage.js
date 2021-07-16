import React from "react";
import {PP} from '../image/Logo.png';
import {UserCards} from './UserCards.js';
import {Card,CardGroup,Button} from "react-bootstrap";
const HomePage = () => {
  return (
    <div>
     <div><img src="PP"></img>
     <p> Ashish Agrawal</p><br/>
    <p>Elementary School</p>
    </div>
    <div>Suggested Peers
    <UserCards/>
    
    </div>
    
    <div>
   
    </div>
    <div> <Button variant="primary" size="lg">
      Create Group
    </Button>{' '}
  </div>
    </div>
  );
};

export default HomePage;
