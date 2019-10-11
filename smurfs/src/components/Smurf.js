import React from "react"
import { Card, Divider } from 'semantic-ui-react';

const Smurf = (props) => {

    return (
        <Card color='blue'>        
            <Card.Content>          
            <Divider hidden />  
            <Card.Header> Name: {props.smurf.name}</Card.Header>
            <Divider hidden />
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <Divider hidden />
        </Card.Content>
        </Card>
    )
}
export default Smurf