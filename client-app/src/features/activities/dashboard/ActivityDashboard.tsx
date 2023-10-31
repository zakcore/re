import React, { useEffect } from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivitForm';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import NavBar from '../../../App/Layout/NavBar';

export default observer( function  ActivityDashboard(){
    const {activityStore}=useStore();
    const{activityRegistery,loadActivities}=activityStore

    useEffect(()=>{
      if (activityRegistery.size<=1 )loadActivities()
    },[activityStore])
    
    if (activityStore.loadingInitial ){
      return(<LoadingComponent  content='Loading....' /> )
    }
    
    else{
        
return(

<Grid>
    <GridColumn width={10}>
    <ActivityList/>
    
    </GridColumn>
    <GridColumn width={'6'}>
    <h2>Activities filtre</h2>
    </GridColumn>
</Grid>
)
    }
})