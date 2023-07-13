import React from 'react'
import { Button, ButtonContent, ButtonGroup, Card, Form, Icon, Image, Segment } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/Activity'
interface Props{
    activity:Activity|undefined
    formClose:()=>void

}

export default function ActivityForm ({activity,formClose}:Props){
return(
<Segment clearing>
    <Form>
        <Form.Input placeholder='title' />
        <Form.TextArea placeholder='description' />
        <Form.Input placeholder='category' />
        <Form.Input placeholder='date' />
        <Form.Input placeholder='city' />
        <Form.Input placeholder='venue' />
        <Button positive floated='right' type='submit' content='Submit'/>
        <Button onClick={formClose} floated='right' type='button' content='Cancel'/>
    </Form>
</Segment>

)

}
