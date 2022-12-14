import PropTypes from "prop-types";
import Label from "./Label";
import InputColor from "./InputColor";

// Este componente muevelo a la carpeta de components/molecules
const InputColorGroup = ({ id, color, onChange }) => {
  return (
    <>
      <Label htmlFor={id} label="Triangle color:" />
      <InputColor
        // Esto esta mal, el id debe ser unico, no puedes tener dos elementos con el mismo id
        // Lo deberías de heredar de la propiedad id que recibe el componente id={id}
        // Lo mismo para name
        id="triangle-color"
        name="triangle-color"
        color={color}
        onChange={onChange}
      />
    </>
  );
};

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputColorGroup;
