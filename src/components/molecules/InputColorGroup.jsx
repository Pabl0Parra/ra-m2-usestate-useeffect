import PropTypes from "prop-types";
import Label from "../atoms/Label";
import InputColor from "../atoms/InputColor";

const InputColorGroup = ({ id, title, color, onChange }) => {
  return (
    <>
      <Label htmlFor={id} title={title} />
      <InputColor id={id} name={id} color={color} onChange={onChange} />
    </>
  );
};

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputColorGroup;
