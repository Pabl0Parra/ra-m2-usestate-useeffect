import PropTypes from "prop-types";

const Triangle = ({ size, color }) => {
  return (
    <div>
      <svg height={size} width={size} fill={color}>
        <polygon points={`${size / 2},0 0,${size} ${size},${size}`} />
      </svg>
    </div>
  );
};

Triangle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Triangle;
