import React from "react";
import {connect} from "react-redux";

const PageThree = (props)=>(
  <div>
    <button onClick={()=>props.dispatch({type:"DECREMENT"})}>
      <h1>-</h1>
    </button>
  </div>
)

export default connect()(PageThree);