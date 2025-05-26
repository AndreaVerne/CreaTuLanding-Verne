const ButtonMultiuso = (props) => {
    console.log(props.styles);
return (
<button style={props.styles} onClick={props.handler}>
    {props.texto}
</button>
)
}
// exporto el componente completo y todo lo que esta en el
export default ButtonMultiuso