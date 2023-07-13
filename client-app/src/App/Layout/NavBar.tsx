import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
interface Props{
    formOpen:()=>void
}
export default function Navbar({formOpen}:Props){

    return(

        <Menu inverted fixed='top'>
            
        <Container>
            <Menu.Item header>
                <img src="assets/logo.png" alt="Logo" />
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activities'></Menu.Item>
            <Menu.Item name='Activities'>
                <Button onClick={formOpen} positive content='Create Activity'/>
            </Menu.Item>

        </Container>    
            
            
        </Menu>

    )
}
