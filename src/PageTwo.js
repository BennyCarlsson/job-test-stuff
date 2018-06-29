import React from "react";
import {connect} from 'react-redux';

const PageTwo = (props) => (
  <div>
    <button onClick={()=>props.dispatch({type:"INCREMENT"})}>
      <h1>+</h1>
    </button>
  </div>
)

export default connect()(PageTwo);