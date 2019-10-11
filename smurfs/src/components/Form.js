import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';
import { Input, Button } from 'semantic-ui-react'


const Form = props => {
    const [newSmurf, setNewSmurf] = useState({ 
        name: '',
        age: '',
        height: '' 
     })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSmurf(newSmurf)
    }

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
      }

    return (
        <div>
    
            <Input name="name" type="text" placeholder="Name" onChange={handleChanges}></Input>
            <Input name="age" type="text" placeholder="Age" onChange={handleChanges}></Input>
            <Input name="height" type="text" placeholder="Height" onChange={handleChanges}></Input>
            <Button color='blue' type="submit" onClick={handleSubmit}>Add New Smurf</Button>
  
        </div>
    )
}

export default connect(null, {addSmurf})(Form) 