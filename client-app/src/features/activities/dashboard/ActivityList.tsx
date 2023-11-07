import {Header, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react";


export default  observer( function ActivityList(){
const {activityStore}=useStore();
 const{ActivitiesByDate,GroupActivities}=activityStore
    return(
      <>
      {
         GroupActivities.map(([group,activitiesarr])=>(
               <Fragment key={group}>
                  <Header sub color="teal">{group}</Header>
        {activitiesarr.map(activity=>
        (<ActivityListItem key={activity.id} activity={activity}/>)
       )}
               </Fragment>

         ))

      }
       

      </>
                
      


    )
}
)