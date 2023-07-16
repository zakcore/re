import React, { ChangeEvent, useState } from 'react'
import { Button,Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/Activity'
interface Props{
    activity:Activity|undefined
    formClose:()=>void
    editOrCreate:(activity:Activity)=>void
}

export default function ActivityForm ({activity:selectedActivity,formClose,editOrCreate}:Props){
const intialState=selectedActivity??{
    id: '',
    title: "",
    date:"",
    description:"",
    category: "",
    city: "",
    venue: "",
}

    const [activity,setActivity]=useState(intialState)
    function handleSubmit(){
        editOrCreate(activity)

    }
    function HandleOnChange(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
            const {name,value}=event.target;
            setActivity({...activity,[name]:value})
    }
return(
<Segment clearing>
    <Form onSubmit={handleSubmit}>
        <Form.Input placeholder='title' value={activity.title} name='title' onChange={HandleOnChange}/>
        <Form.TextArea placeholder='description' value={activity.description} name='description' onChange={HandleOnChange} />
        <Form.Input placeholder='category' value={activity.category} name='category' onChange={HandleOnChange} />
        <Form.Input placeholder='date' value={activity.date} name='date' onChange={HandleOnChange}/>
        <Form.Input placeholder='city' value={activity.city} name='city' onChange={HandleOnChange}/>
        <Form.Input placeholder='venue' value={activity.venue} name='venue' onChange={HandleOnChange}/>
        <Button positive floated='right' type='submit' content='Submit'/>
        <Button onClick={formClose} floated='right' type='button' content='Cancel'/>
    </Form>
</Segment>

)

}
