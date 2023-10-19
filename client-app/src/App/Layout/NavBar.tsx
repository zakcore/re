import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

export default observer( function Navbar(){
const{activityStore}=useStore()
const{openForm}=activityStore
    return(

        <Menu inverted fixed='top'>
            
        <Container>
            <Menu.Item header>
                <img src="assets/logo.png" alt="Logo" />
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activities'></Menu.Item>
            <Menu.Item name='Activities'>
                <Button onClick={()=>openForm()} positive content='Create Activity'/>
            </Menu.Item>

        </Container>    
            
            
        </Menu>

    )
}
)