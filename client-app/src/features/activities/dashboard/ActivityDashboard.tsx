import React, { useEffect } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivitForm';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../App/Layout/LoadingComponent';

export default observer( function  ActivityDashboard(){
    const {activityStore}=useStore();
    const{selectedactivity,editMode}=activityStore

    useEffect(()=>{
      activityStore.loadActivities()
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
</Grid>
)
    }
})