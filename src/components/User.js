export default function User(props) {
    const phoneNumber = `${props.phone.slice(0,3)} (${props.phone.slice(3,6)}) ${props.phone.slice(6,9)} ${props.phone.slice(9,11)} ${props.phone.slice(11,13)}`
    return (
        <div className="user">
            <img className="user__avatar" src={props.url} />
            <h3 className="user__name">{props.name}</h3>
            <p className="user__info"><span className="user__position">{props.position}</span>
                <span className="user__email">{props.email}</span>
                <span className="user__phone">{phoneNumber}</span>
            </p>
        </div>
    )
}