import React, { ChangeEvent, useState ,useEffect} from 'react'

import { Button, FormField, FormInput, Input, Label, Message, Segment } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

import LoadingComponent from '../../../App/Layout/LoadingComponent'
import { Link } from 'react-router-dom'
import { Formik,Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
export default observer( function  ActivityForm (){
    const {activityStore}=useStore();
    let navigateTo = useNavigate();
    const{selectedactivity,createActivity,updateActivity,loading,loadActivity,loadingInitial
,setLoadingIntial}=activityStore
const {id}=useParams<{id:string}>()

const[activity,setActivity]=useState({
    id: '',
    title: "",
    date:"",
    description:"",
    category: "",
    city: "",
    venue: "",
})

const validationschema= Yup.object({
    title:Yup.string().required("the title is required")
})
useEffect(()=>{
    if(id) {loadActivity(id).then(activity=>setActivity(activity!))}else{
        setActivity({
            id: '',
            title: "",
            date:"",
            description:"",
            category: "",
            city: "",
            venue: "",
        })
        setLoadingIntial(false)
    }

},[id,loadActivity])


  if(loadingInitial) return <LoadingComponent content='Loading activity'/>
  
return(
<Segment clearing>
    <Formik validationSchema={validationschema} enableReinitialize initialValues={activity} onSubmit={(values)=>console.log(values)}>
        {({handleSubmit,errors,touched})=>(
    <Form className='ui form' onSubmit={handleSubmit}>
      <FormField>

        <Field placeholder='title' name='title'/>
          {errors.title && touched.title ? (
        <Label pointing prompt content={errors.title} />

           ) : null}
      </FormField>

      <Field placeholder='description'   name='description'  />
        <Field placeholder='category'  name='category'  />
        <Field type='date' placeholder='date' name='date' />
        <Field placeholder='city'   name='city' />
        <Field placeholder='venue'  name='venue' />
        <Button  positive loading={loading} floated='right' type='submit' content='Submit'/>
        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
    </Form>
)}

    </Formik>
</Segment>

)

}
)