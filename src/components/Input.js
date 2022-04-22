export default function Input(props) {
    return (
        <>
            <label htmlFor={props.name}>
                <input type={props.type} name={props.name} id={props.name} className="input" placeholder={props.text} onChange={props.handleChange} minLength={props.minLength} maxLength={props.maxLength} required/>
                <span>{props.text}</span>
            </label>
            {props.tip && !props.error ? (<p style={{color: "#7E7E7E"}} className="form__error">{props.tip}</p>) : (<p className="form__error">{props.error}</p>)}
        </>
    )
}