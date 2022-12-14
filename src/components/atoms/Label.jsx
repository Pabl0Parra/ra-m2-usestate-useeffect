// Label no tiene etiqueta id.
// En lugar de usar props, haz destructuring de props.
const Label = (props) => <label id={props.id}>{props.value}</label>;

export default Label;
