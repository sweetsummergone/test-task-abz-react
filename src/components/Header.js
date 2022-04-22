import logo from "../images/Logo.svg"

export default function Header() {
    return (
        <header className="header">
            <img className="header__image" src={logo} />
            <div className="header__buttons">
                <a href="#get" className="button header__button-users">Users</a>
                <a href="#post" className="button header__button-signup">Sign up</a>
            </div>
        </header>
    )
}