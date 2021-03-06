import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Display = props => {
  return <div />;
};

const mapStateToProps = ({ reducers }) => ({ reducers });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Display);
