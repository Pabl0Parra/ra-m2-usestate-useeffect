import PropTypes from "prop-types";

const InputColor = ({ id, name, color, onChange }) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type="color"
        value={color}
        style={{ width: "40px" }}
        onChange={onChange}
      />
    </div>
  );
};

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputColor;
