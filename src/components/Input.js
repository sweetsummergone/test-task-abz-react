export default function Input(props) {
    return (
        <label htmlFor={props.name}>
            <input type="text" name={props.name} id={props.name} className="input" placeholder={props.text} required />
            <span>{props.text}</span>
        </label>
    )
}