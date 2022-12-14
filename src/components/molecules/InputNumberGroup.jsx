import PropTypes from "prop-types";
import Label from "../atoms/Label";
import InputNumber from "../atoms/InputNumber";

const InputNumberGroup = ({ id, value, onChange }) => {
  return (
    <>
      <Label htmlFor={id} label="Triangle size:" />
      <InputNumber id={id} name="shapeSize" value={value} onChange={onChange} />
    </>
  );
};
InputNumberGroup.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumberGroup;
