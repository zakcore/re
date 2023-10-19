import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/Activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivitForm';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';
interface Props{
    Activities:Activity[];
    deleteActivity:(id:string)=>void
}

export default observer( function  ActivityDashboard({Activities,deleteActivity}:Props){
    const {activityStore}=useStore();
    const{selectedactivity,editMode}=activityStore

return(
<Grid>
    <GridColumn width={10}>
    <ActivityList  activities={Activities}
     deleteActivity={deleteActivity}    />
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