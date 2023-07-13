import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Models/Activity";

interface Props{
    activities:Activity[]
    selectActivity:(id:string)=>void
    formClose:()=>void

}
export default function ActivityList({activities,selectActivity,formClose}:Props){

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
                   <Button onClick={()=>{selectActivity(activity.id); formClose()} } floated="right" color="blue" content="View"/>
                <Label basic content ={activity.category}/>
                </Item.Extra>
        </Item.Content>
        </Item>
       )}
       </Item.Group>
       </Segment> 
                
      


    )
}