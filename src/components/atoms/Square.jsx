import PropTypes from "prop-types";

const Square = ({ size, color }) => {
  return (
    <div>
      <svg height={size} width={size} fill={color}>
        <rect height={size} width={size} />
      </svg>
    </div>
  );
};

Square.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Square;
