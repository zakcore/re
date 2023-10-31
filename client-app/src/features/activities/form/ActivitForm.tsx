import React, { ChangeEvent, useState ,useEffect} from 'react'

import { Button,Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

import LoadingComponent from '../../../App/Layout/LoadingComponent'
import { Link } from 'react-router-dom'

export default observer( function  ActivityForm (){
    const {activityStore}=useStore();
    let navigateTo = useNavigate();
    const{selectedactivity,createActivity,updateActivity,loading,loadActivity,loadingInitial
,setLoadingIntial}=activityStore
const {id}=useParams<{id:string}>()

const[activity,setActivity]=useState({
    id: '',
    title: "",
    date:"",
    description:"",
    category: "",
    city: "",
    venue: "",
})

useEffect(()=>{
    if(id) {loadActivity(id).then(activity=>setActivity(activity!))}else{
        setActivity({
            id: '',
            title: "",
            date:"",
            description:"",
            category: "",
            city: "",
            venue: "",
        })
        setLoadingIntial(false)
    }

},[id,loadActivity])
   
    function handleSubmit(){
        if(activity.id.length===0){
            let newActivity={...activity,id:uuid()}
            createActivity(newActivity).then(()=>{

                navigateTo(`/activities/${newActivity.id}`)
            })   
        }else{
            updateActivity(activity).then(()=>{

                navigateTo(`/activities/${activity.id}`)
            })   

        }
        
    }
    function HandleOnChange(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
            const {name,value}=event.target;
            setActivity({...activity,[name]:value})
    }

  if(loadingInitial) return <LoadingComponent content='Loading activity'/>
  
return(
<Segment clearing>
    <Form onSubmit={handleSubmit}>
        <Form.Input placehol der='title' value={activity.title} name='title' onChange={HandleOnChange}/>
        <Form.TextArea placeholder='description' value={activity.description} name='description' onChange={HandleOnChange} />
        <Form.Input placeholder='category' value={activity.category} name='category' onChange={HandleOnChange} />
        <Form.Input type='date' placeholder='date' value={activity.date} name='date' onChange={HandleOnChange}/>
        <Form.Input placeholder='city' value={activity.city} name='city' onChange={HandleOnChange}/>
        <Form.Input placeholder='venue' value={activity.venue} name='venue' onChange={HandleOnChange}/>
        <Button  positive loading={loading} floated='right' type='submit' content='Submit'/>
        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
    </Form>
</Segment>

)

}
)