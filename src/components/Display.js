import React from "react";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = {
  display: {
    width: "100%"
  }
};

const Display = props => {
  const { display } = props.classes;
  const { startColor, endColor } = props.gradient;

  return (
    <div
      className={display}
      style={{
        background: `linear-gradient(0deg, ${startColor}, ${endColor})`
      }}
    />
  );
};

const mapStateToProps = ({ gradient }) => ({ gradient });

const mapDispatchToProps = dispatch => ({});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Display)
);
