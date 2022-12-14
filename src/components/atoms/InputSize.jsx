import PropTypes from "prop-types";

// Renombrar el componente a InputNumber para que sea más generico y reusable.
// El name debería ser un prop, al igual que id.
// El value debería de llamarse value.
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
