import React from "react";
import { withStyles } from "material-ui/styles";

const styles = {
  display: {
    width: "100%",
    backgroundColor: "red"
  }
};

const Display = props => {
  const { display } = props.classes;

  return <div className={display} />;
};

export default withStyles(styles)(Display);
