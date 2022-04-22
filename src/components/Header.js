import logo from "../images/Logo.svg"

export default function Header() {
    return (
        <header className="header">
            <img className="header__image" src={logo} />
            <div className="header__buttons">
                <button className="button header__button-users">Users</button>
                <button className="button header__button-signup">Sign up</button>
            </div>
        </header>
    )
}