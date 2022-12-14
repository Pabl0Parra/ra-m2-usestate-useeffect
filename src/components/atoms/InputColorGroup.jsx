import PropTypes from "prop-types";
import Label from "./Label";
import InputColor from "./InputColor";

const InputColorGroup = ({ id, color, onChange }) => {
  return (
    <>
      <Label htmlFor={id} label="Triangle color:" />
      <InputColor
        id="triangle-color"
        name="triangle-color"
        color={color}
        onChange={onChange}
      />
    </>
  );
};

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputColorGroup;
