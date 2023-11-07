import React from "react"
import Calendar from "react-calendar"
import { Header, Menu } from "semantic-ui-react"
export default function ActivityFilters(){

    return(
        <>
        <Menu vertical style={{width:'100%',marginTop:25}}>
            <Header icon="filter" attached color="teal" content="Fliters"/>
            <Menu.Item content="All activities"/>
            <Menu.Item content="i'am going"/>
            <Menu.Item content="i'am hosting"/>
            
        </Menu>
        <Header/>
            <Calendar/>
        </>

    )
}