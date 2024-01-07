import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../App/stores/store";
import { Container, Header, Segment } from "semantic-ui-react";

export default observer(
    function ServerError(){
        const {commonStore}=useStore();

        return(

            <Container>
                <Header as='h1' content="Server Error"></Header>
                <Header sub as='h5' content={commonStore.error?.message}></Header>
                    {commonStore.error?.details&&
                <Segment>
                    <Header as='h4' color="teal" content='stack trace'></Header>
                    <code style={{marginTop:'10px'}}>{commonStore.error.details}</code>
                </Segment>
                    }
            </Container>

        )
    }
)