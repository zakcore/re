import React, { SyntheticEvent, useState } from "react";
import { Button, Icon, Item, ItemGroup, Segment, SegmentGroup } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import { Activity } from "../../../App/Models/Activity";
import { Link } from "react-router-dom";
interface Props {

    activity: Activity
}
export default function ({ activity }: Props) {

    const [target, settarget] = useState('')

    const { activityStore } = useStore();
    const { loading, deleteActivity } = activityStore
    function handledeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        settarget(e.currentTarget.name)
        deleteActivity(id)
    }

    return (

        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" />{activity.date}
                    <Icon name="marker" />{activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                attendees goes here
            </Segment>
            <Segment clearing >
                <span>{activity.description}</span>
                <Button as={Link} to={`/activities/${activity.id}`}
                    color="teal"
                    floated="right"
                    content="view"
                ></Button>
            </Segment>
        </Segment.Group>

    )
}