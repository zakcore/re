import { FieldInputProps, useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker,{ReactDatePickerProps} from 'react-datepicker'

export default function MyDatePicker(props:Partial<ReactDatePickerProps>){

    const [field,meta,helpers]=useField(props.name!)
    const helperfunction=(f:FieldInputProps<any>)=>{
            if(typeof(f.value)==='string'){
                console.log(typeof(f.value))
                return new Date()
            }else{
                console.log(typeof(f.value))
                return f.value
            }

    }
    return(
        <Form.Field error={meta.touched && !!meta.error}>

        <DatePicker
         selected={helperfunction(field)}
         name={field.name}
        {...props}
         onChange={value=>helpers.setValue(value)}/>
            {meta.touched && !!meta.error? <Label basic color="red">{meta.error}</Label>:null}

        </Form.Field>
    )
}