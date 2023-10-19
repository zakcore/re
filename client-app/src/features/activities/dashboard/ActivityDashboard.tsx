import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/Activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivitForm';
import { useStore } from '../../../App/stores/store';
interface Props{
    Activities:Activity[];
    editOrCreate:(activity:Activity)=>void
    deleteActivity:(id:string)=>void
    submitting:boolean
}

export default function ActivityDashboard({Activities,editOrCreate,deleteActivity,submitting}:Props){
    const {activityStore}=useStore();
    const{selectedactivity,editMode}=activityStore

return(
<Grid>
    <GridColumn width={10}>
    <ActivityList  activities={Activities}
     deleteActivity={deleteActivity}  submitting={submitting}   />
    </GridColumn>
    <GridColumn width={6}>
    {selectedactivity && !editMode &&
    <ActivityDetails 
    />
    }
    {editMode && 
    <ActivityForm   editOrCreate={editOrCreate}  submitting={submitting}
    /> }
   
    </GridColumn>
</Grid>
)

}