import PropTypes from "prop-types";

const InputNumber = ({ id, value, onChange }) => {
  return (
    <>
      <input
        id={id}
        name={id}
        style={{ width: "42px" }}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
