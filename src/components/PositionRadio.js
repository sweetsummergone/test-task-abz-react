export default function PositionRadio(props) {
    if (props.checked) {
        return (
            <div className="position__subject">
                <input onClick={props.onChange} className="position__radio" type="radio" name="position" value={props.name} id={props.id} defaultChecked />
                <label htmlFor={props.id}>{props.name}</label>
            </div>
        )
    } else {
        return (
            <div className="position__subject">
                <input onClick={props.onChange} className="position__radio" type="radio" name="position" value={props.name} id={props.id} />
                <label htmlFor={props.id}>{props.name}</label>
            </div>
        )
    }
}