import React from "react";
import {connect} from "react-redux";
import {incerement} from "./actions";

const PageTwo = (props) => (
  <div>
    <button onClick={props.incerement}>
      <h1>+</h1>
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  incerement: () => dispatch(incerement(1))
})

export default connect(null, mapDispatchToProps)(PageTwo);