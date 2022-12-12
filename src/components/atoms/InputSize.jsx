import PropTypes from "prop-types";

const InputSize = ({ id, size, onChange }) => {
  return (
    <>
      <input
        id={id}
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
  id: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSize;
