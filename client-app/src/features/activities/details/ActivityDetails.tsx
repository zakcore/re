
import { Button, ButtonGroup, Card, Grid, Image } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import ActivityDtailedChat from './ActivityDtailedChat';
import ActivityDtailedHeader from './ActivityDetailedHeader';
import ActivityDtailedInfo from './ActivityDtailedInfo';
import ActivityDtailedSideBar from './ActivityDtailedSideBar';

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
<Grid>
  <Grid.Column width={10}>
    <ActivityDtailedHeader activity={activity}/>
    <ActivityDtailedInfo activity={activity}/>
    <ActivityDtailedChat/>
  </Grid.Column>
  <Grid.Column width={6}>
    <ActivityDtailedSideBar/>
  </Grid.Column>
</Grid>
)

}
)