
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store';
import LoadingComponent from '../../../App/Layout/LoadingComponent';

export default function ActivityDetails(){
  const {activityStore}=useStore();
  const{openForm,cancelSelectActivity,selectedactivity:activity}=activityStore
  if(!activity)return <LoadingComponent content='...' />
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
        <Button onClick={()=>openForm(activity.id)} basic color='blue' content="Edit" />
        <Button basic color='grey' content="Cancel" onClick={cancelSelectActivity} />
    </ButtonGroup>
    </Card.Content>
  </Card>

)

}
