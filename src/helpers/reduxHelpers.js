import _ from "lodash";

export const stateChange = (oldState, changes) => {
  return _.merge({}, oldState, changes);
};
