import PropTypes from "prop-types";

const InputSize = ({ label, size, onChange }) => {
  return (
    <>
      <label htmlFor="shapeSize">{label}</label>
      <input
        id="shapeSize"
        name="shapeSize"
        type="number"
        style={{ width: "42px" }}
        value={size}
        onChange={onChange}
      />
    </>
  );
};

InputSize.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSize;
