export default function User(props) {
    return (
        <div className="user">
            <img className="user__avatar" src={props.url} />
            <h3 className="user__name">{props.name}</h3>
            <p className="user__info"><span className="user__position">{props.position}</span>
                <span className="user__email">{props.email}</span>
                <span className="user__phone">{props.phone}</span>
            </p>
        </div>
    )
}