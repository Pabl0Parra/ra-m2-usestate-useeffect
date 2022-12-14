import PropTypes from "prop-types";

const InputNumber = ({ id, name, value, onChange }) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type="number"
        style={{ width: "42px" }}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
