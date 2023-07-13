import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { Activity } from '../../../App/Models/Activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivitForm';
interface Props{
    Activities:Activity[];
    selectedActivity:Activity|undefined
    selectActivity:(id:string)=>void
    cancelSlectActivity:()=>void
    formOpen:(id:string)=>void
    formClose:()=>void
    editMode:boolean
}
export default function ActivityDashboard({Activities,selectedActivity
    ,selectActivity,cancelSlectActivity,formClose,formOpen,editMode}:Props){
return(
<Grid>
    <GridColumn width={10}>
    <ActivityList activities={Activities} selectActivity={selectActivity}  formClose={formClose}   />
    </GridColumn>
    <GridColumn width={6}>
    {selectedActivity && !editMode &&
    <ActivityDetails activity={selectedActivity} 
    cancelSlectActivity={cancelSlectActivity} formOpen={formOpen}/>
    }
    {editMode && <ActivityForm formClose={formClose} activity={selectedActivity}/> }
   
    </GridColumn>
</Grid>
)

}