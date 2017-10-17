export const CHANGE_START_COLOR = "CHANGE_START_COLOR";
export const changeStartColor = newColor => ({
  type: CHANGE_START_COLOR,
  payload: newColor
});

export const CHANGE_END_COLOR = "CHANGE_END_COLOR";
export const changeEndColor = newColor => ({
  type: CHANGE_END_COLOR,
  payload: newColor
});
