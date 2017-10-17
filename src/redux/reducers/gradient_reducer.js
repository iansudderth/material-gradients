import { stateChange } from "../../helpers/reduxHelpers";
import { CHANGE_START_COLOR, CHANGE_END_COLOR } from "../actions";

const defaultGradient = {
  startColor: "#000000",
  endColor: "#FFFFFF"
};

const gradient = (state = defaultGradient, action) => {
  switch (action.type) {
    case CHANGE_START_COLOR: {
      return stateChange(state, { startColor: action.payload });
    }
    case CHANGE_END_COLOR: {
      return stateChange(state, { endColor: action.payload });
    }
    default: {
      return state;
    }
  }
};

export default gradient;
