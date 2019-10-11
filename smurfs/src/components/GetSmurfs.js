import React, {useEffect} from "react"
import Smurf from "./Smurf"


import {connect} from "react-redux"
import { fetchSmurfs } from "../actions/index"


const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
  }, [])

  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
