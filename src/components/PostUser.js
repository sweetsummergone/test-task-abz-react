import Input from "./Input";
import FileUploader from "./FileUploader";
import PositionRadio from "./PositionRadio";

export default function PostUser() {
    return (
        <div className="post" id="post">
            <h2 className="title post__title">Working with POST request</h2>
            <form className="form post__form" action="submit">
                <div className="form__inputs">
                    <Input name="name" type="text" text="Your name"/>
                    <Input name="email" type="email" text="Email"/>
                    <Input name="phone" type="tel" text="Phone"/>
                </div>
                <p className="form__tel-tip">+38 (XXX) XXX - XX - XX</p>
                <div className="position form__position">
                    <p className="position__title">
                        Select your position
                    </p>
                    <div className="position__radios">
                        <PositionRadio id="frontend" name="Frontend developer" checked />
                        <PositionRadio id="backend" name="Backend developer" />
                        <PositionRadio id="designer" name="Designer" />
                        <PositionRadio id="qa" name="QA" />
                    </div>
                </div>
                <FileUploader />
                <div className="form__submit">
                    <input type="submit" className="button button_disabled form__submit-button" value="Sign up" />
                </div>
            </form>
        </div>
    )
}