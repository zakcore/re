import React, { ChangeEvent, useState } from 'react'
import { Button,Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/Activity'
import { useStore } from '../../../App/stores/store'
import { observer } from 'mobx-react-lite'

export default observer( function  ActivityForm (){
    const {activityStore}=useStore();
const{closeForm,selectedactivity,createActivity,updateActivity,loading}=activityStore

const intialState=selectedactivity??{
    id: '',
    title: "",
    date:"",
    description:"",
    category: "",
    city: "",
    venue: "",
}

const[activity,setActivity]=useState(intialState)
   
    function handleSubmit(){
        activity.id?updateActivity(activity):createActivity(activity)
        
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
        <Form.Input type='date' placeholder='date' value={activity.date} name='date' onChange={HandleOnChange}/>
        <Form.Input placeholder='city' value={activity.city} name='city' onChange={HandleOnChange}/>
        <Form.Input placeholder='venue' value={activity.venue} name='venue' onChange={HandleOnChange}/>
        <Button  positive loading={loading} floated='right' type='submit' content='Submit'/>
        <Button onClick={closeForm} floated='right' type='button' content='Cancel'/>
    </Form>
</Segment>

)

}
)