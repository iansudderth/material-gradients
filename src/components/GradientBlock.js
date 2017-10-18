import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const GradientBlock = props => {
  return <div />;
};

GradientBlock.propTypes = {};

GradientBlock.defaultProps = {};

const mapStateToProps = ({ reducers }) => ({ reducers });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GradientBlock);
