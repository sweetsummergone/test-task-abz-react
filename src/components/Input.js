export default function Input(props) {
    return (
        <>
            <label htmlFor={props.name}>
                <input type={props.type} name={props.name} id={props.name} className="input" placeholder={props.text} required onChange={props.handleChange}/>
                <span>{props.text}</span>
            </label>
            <p className="form__error">{props.error}</p>
        </>
    )
}