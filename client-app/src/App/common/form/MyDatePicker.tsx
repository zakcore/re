import { FieldInputProps, useField } from "formik";
import React, { useEffect, useState } from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker,{ReactDatePickerProps} from 'react-datepicker'

export default function MyDatePicker(props:Partial<ReactDatePickerProps>){

    const [field,meta,helpers]=useField(props.name!)
   
    
    return(
        <Form.Field error={meta.touched && !!meta.error}>
        <DatePicker
         {...field}
         {...props}
         selected={field && field.value ||null}
         onChange={value=>helpers.setValue(value)}/>
         
        {meta.touched && !!meta.error? <Label basic color="red">{meta.error}</Label>:null}

        </Form.Field>
    )
}