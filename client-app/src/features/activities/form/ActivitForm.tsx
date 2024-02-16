import React, { ChangeEvent, useState ,useEffect} from 'react'

import { Button, FormInput, Input, Label, Message, Segment } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store'
import { observer } from 'mobx-react-lite'
import {  useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

import LoadingComponent from '../../../App/Layout/LoadingComponent'
import { Link } from 'react-router-dom'
import { Formik,Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../../../App/common/form/MyTextInput'
import MyTextArea from '../../../App/common/form/MyTextArea'
import MySelectInput from '../../../App/common/form/MySelectInput'
import { categoryOptions } from '../../../App/common/options/categoryOptions'
import MyDatePicker from '../../../App/common/form/MyDatePicker'
import { Activity } from '../../../App/Models/Activity'

export default observer( function  ActivityForm (){

 const {activityStore}=useStore();
 const{selectedactivity,createActivity,updateActivity,loading,loadActivity,loadingInitial
,setLoadingIntial}=activityStore
const {id}=useParams<{id:string}>()
let navigateTo=useNavigate()
const[activity,setActivity]=useState<Activity>({
    id: '',
    title: "",
    date:null,
    description:"",
    category: "",
    city: "",
    venue: "",
})

const validationschema= Yup.object({
    title:Yup.string().required("the title is required"),
    description:Yup.string().required(),
    date:Yup.string().required(),
    category:Yup.string().required(),
    city:Yup.string().required(),
    venue:Yup.string().required()
})
useEffect(()=>{
    if(id) {loadActivity(id).then(activity=>setActivity(activity!))}
    setLoadingIntial(false)

},[id,loadActivity])

function handleFormSubmit(activity:Activity){
    if(activity.id.length===0){
        let newActivity={...activity,id:uuid()}
        createActivity(newActivity).then(()=>{

            navigateTo(`/activities/${newActivity.id}`)
        })   
    }else{
        updateActivity(activity).then(()=>{

            navigateTo(`/activities/${activity.id}`)
        })   

    }
    
}
  if(loadingInitial) return <LoadingComponent content='Loading activity'/>
  
return(
<Segment clearing>
    <Formik validationSchema={validationschema} enableReinitialize initialValues={activity}
     onSubmit={(values)=>handleFormSubmit(values)}>
        {({handleSubmit,isSubmitting,isValid,dirty})=>(
    <Form className='ui form' onSubmit={handleSubmit}>
        <MyTextInput name='title' placeholder='title' />
        <MyTextArea rows={3} placeholder='description'   name='description'  />
        <MySelectInput options={categoryOptions} placeholder='category'  name='category'  />
        <MyDatePicker  placeholderText='date'  name='date'
         showTimeSelect timeCaption='time' 
         dateFormat='MMMM d,yyyy h:mm aa' />
        <MyTextInput placeholder='city'   name='city' />
        <MyTextInput placeholder='venue'  name='venue' />
        <Button  positive disabled={!isValid||!dirty||isSubmitting} loading={loading} floated='right' type='submit' content='Submit'/>
        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
    </Form>
)}

    </Formik>
</Segment>

)

}
)