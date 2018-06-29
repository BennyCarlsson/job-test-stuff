import React from "react";
import {connect} from "react-redux";
import {decerement} from "./actions";
const PageThree = (props)=>(
  <div>
    <button onClick={props.decrement}>
      <h1>-</h1>
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) =>({
  decrement: () => dispatch(decerement(1))
})

export default connect(null, mapDispatchToProps)(PageThree);