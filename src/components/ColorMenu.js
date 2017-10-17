import React, { Component } from "react";
import ButtonBase from "material-ui/ButtonBase";
import { withStyles } from "material-ui/styles";
import { red } from "material-ui/colors";
import { generateReadableColor } from "../helpers/colorFunctions";

const styles = {
  buttonStyles: {
    padding: 18,
    margin: 4,
    fontSize: "1.2rem"
  }
};

class ColorMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const redKeys = Object.keys(red);
    const { buttonStyles } = this.props.classes;
    return (
      <div>
        {redKeys.map(value => {
          const textColor = generateReadableColor(red[value]);
          return (
            <div key={`red-${value}`}>
              <ButtonBase
                style={{ backgroundColor: red[value], color: `#${textColor}` }}
                className={buttonStyles}
              >
                {value}
              </ButtonBase>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(ColorMenu);
