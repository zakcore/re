
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export default observer( function ActivityDetails(){
  const {activityStore}=useStore();
  const{selectedactivity:activity,loadActivity,loadingInitial}=activityStore
  const {id}=useParams<{id:string}>()

  useEffect(()=>{
if(id){
loadActivity(id)
}

  },[id,loadActivity])
  if(!activity||loadingInitial)return <LoadingComponent content='Loading' />
return(
<Card fluid>
    <Image src={`/assets/categoryImages/${activity.category}.jpg` } wrapped ui={false} />
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
        <Button as ={Link} to={`/manage/${activity.id}`} basic color='blue' content="Edit" />
        <Button as ={Link} to='/activities' basic color='grey' content="Cancel" />
    </ButtonGroup>
    </Card.Content>
  </Card>

)

}
)