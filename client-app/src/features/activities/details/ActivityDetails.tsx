import React from 'react'
import { Button, ButtonContent, ButtonGroup, Card, Icon, Image } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/Activity'

interface Props{
    activity:Activity
    cancelSlectActivity:()=>void
    formOpen:(id:string)=>void

}
export default function ActivityDetails({activity,cancelSlectActivity,formOpen}:Props){
return(
<Card fluid>
    <Image src={`assets/categoryImages/${activity.category}.jpg` }wrapped ui={false} />
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span >{activity.date}</span>
      </Card.Meta>
      <Card.Description>
        {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <ButtonGroup widths={2}>
        <Button onClick={()=>formOpen(activity.id)} basic color='blue' content="Edit" />
        <Button basic color='grey' content="Cancel" onClick={cancelSlectActivity} />
    </ButtonGroup>
    </Card.Content>
  </Card>

)

}
