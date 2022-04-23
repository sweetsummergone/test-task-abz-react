export default function User(props) {
    const phoneNumber = props.phone.replace( /^\D+/g, '');
    const formatted = `+38 (${phoneNumber.slice(2,5)}) ${phoneNumber.slice(5,8)} ${phoneNumber.slice(8,10)} ${phoneNumber.slice(10,12)}`
    
    return (
        <div className="user">
            <img className="user__avatar" src={props.url} />
            <h3 className="user__name">{props.name}</h3>
            <p className="user__info"><span className="user__position">{props.position}</span>
                <a className="user__email" href={`mailto:${props.email}`}>{props.email}
                    <span className="user__email_tooltip">{props.email}</span>
                </a>
                <span className="user__phone">{formatted}</span>
            </p>
        </div>
    )
}