import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Models/Activity";
import { useStore } from "../../../App/stores/store";

interface Props{
    activities:Activity[]
    deleteActivity:(id:string)=>void
}
export default function ActivityList({activities,deleteActivity}:Props){
const [target,settarget]=useState('')
function handledeleteActivity(e:SyntheticEvent<HTMLButtonElement>,id:string){
settarget(e.currentTarget.name)
deleteActivity(id)
}

const {activityStore}=useStore();
  const{openForm,closeForm,selectActivity,loading}=activityStore
    return(

       <Segment>
        <Item.Group divided>
        {activities.map(activity=>
        <Item>
        <Item.Content>
            <Item.Header as='a'>{activity.title}</Item.Header>
            <Item.Meta>{activity.date}</Item.Meta>
            <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.venue},{activity.city}</div>
            </Item.Description>
                <Item.Extra>
                   <Button onClick={()=>{selectActivity(activity.id); closeForm()} } floated="right" color="blue" content="View"/>
                   <Button name={activity.id} 
                   loading={loading && target===activity.id}
                    onClick={(e)=>handledeleteActivity(e,activity.id)  }
                     floated="right" color="red" content="Delete"/>
                <Label basic content ={activity.category}/>
                </Item.Extra>
        </Item.Content>
        </Item>
       )}
       </Item.Group>
       </Segment> 
                
      


    )
}