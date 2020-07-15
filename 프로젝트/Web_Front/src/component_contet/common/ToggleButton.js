import React from "react";
import { CheckBox, CheckBoxLabel } from "./style/ToggleButton_style";

const ToggleButton = ({ name, value, onClick }) => {
  return (
    <>
      <CheckBox
        name={name}
        id={name}
        type="checkbox"
        value={value}
        onClick={onClick}
      />
      <CheckBoxLabel htmlFor={name} check={value}>
        <div className="pointerCursor" check={value} />
      </CheckBoxLabel>
    </>
  );
};

export default ToggleButton;
