import PropTypes from "prop-types";
import Label from "../atoms/Label";
import InputColor from "../atoms/InputColor";

const InputColorGroup = ({ id, name, color, onChange }) => {
  return (
    <>
      <Label htmlFor={id} label="Triangle color:" />
      <InputColor id={id} name={name} color={color} onChange={onChange} />
    </>
  );
};

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputColorGroup;
