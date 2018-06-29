import React from "react";
import {connect} from 'react-redux';

const PageOne = (props) => (
  <div><h1>Counter: {props.counter}</h1></div>
)

const mapStateToProps = (state) => {
  return {counter: state}
};

export default connect(mapStateToProps,null)(PageOne);