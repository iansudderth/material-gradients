import React from "react";
import { withStyles } from "material-ui/styles";
import ColorMenu from "./ColorMenu";
import Display from "./Display";

const styles = {
  container: {
    display: "flex"
  },
  sidebar: {},
  displayArea: {
    flexGrow: 1,
    display: "flex",
    alignItems: "stretch",
    padding: 16
  }
};

const Layout = props => {
  const { container, sidebar, displayArea } = props.classes;
  return (
    <div className={container}>
      <div className={sidebar}>
        <ColorMenu />
      </div>
      <div className={displayArea}>
        <Display />
      </div>
    </div>
  );
};

export default withStyles(styles)(Layout);
