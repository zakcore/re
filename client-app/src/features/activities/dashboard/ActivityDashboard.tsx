import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivitForm';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';

export default observer( function  ActivityDashboard(){
    const {activityStore}=useStore();
    const{selectedactivity,editMode}=activityStore

return(
<Grid>
    <GridColumn width={10}>
    <ActivityList/>
    </GridColumn>
    <GridColumn width={6}>
    {selectedactivity && !editMode &&
    <ActivityDetails 
    />
    }
    {editMode && 
    <ActivityForm   
    /> }
   
    </GridColumn>
</Grid>
)

})