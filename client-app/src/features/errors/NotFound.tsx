import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Icon, Button } from "semantic-ui-react";

export default function NotFound()
{
    
 return(
   
        <Segment placeholder>
        <Header icon>
          <Icon name='search' />
         OOps sothing went wrong!!
        </Header>
        <Segment.Inline>
          <Button as={Link} primary to='/activities'>Home</Button>
        </Segment.Inline>
        
      </Segment>

 )
}