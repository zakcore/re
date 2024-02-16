import React from  'react'
import { Message } from 'semantic-ui-react'

interface props{

errors:string[]|null
}
export default function ValidationErrors({errors}:props){

return(

    <Message error>
        {errors &&(

<Message.List>
    {errors.map((e:any,i)=>
             (

            <Message.Item key={i}>
                {e}
            </Message.Item>
               )
    

    )}
</Message.List>
        )
}
    </Message>
)
}