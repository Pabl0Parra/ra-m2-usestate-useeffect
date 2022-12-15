import PropTypes from "prop-types";
import Label from "../atoms/Label";
import InputNumber from "../atoms/InputNumber";

const InputNumberGroup = ({ id, title, value, onChange }) => {
  return (
    <>
      <Label htmlFor={id} title={title} />
      <InputNumber id={id} name={id} value={value} onChange={onChange} />
    </>
  );
};
InputNumberGroup.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumberGroup;
