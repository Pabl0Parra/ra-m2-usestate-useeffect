import PropTypes from "prop-types";
import Label from "./Label";
import InputNumber from "./InputNumber";

const InputNumberGroup = ({ id, value, onChange }) => {
  return (
    <>
      <Label htmlFor={id} label="Triangle size:" />
      <InputNumber
        id={id}
        name="shapeSize"
        type="number"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
InputNumberGroup.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumberGroup;
