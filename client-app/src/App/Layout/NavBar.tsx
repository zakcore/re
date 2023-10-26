import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { link } from 'fs';
import { NavLink } from 'react-router-dom';

export default observer( function Navbar(){

    return(

        <Menu inverted fixed='top'>
            
        <Container>
            <Menu.Item as ={NavLink} to='/' header>
                <img src="/assets/logo.png" alt="Logo" />
                Reactivities
            </Menu.Item>
            <Menu.Item as ={NavLink} to='/activities' name='Activities'></Menu.Item>
            <Menu.Item name='Activities'   >
                <Button as ={NavLink} to='/createactivity' positive content='Create Activity'/>
            </Menu.Item>

        </Container>    
            
            
        </Menu>

    )
}
)