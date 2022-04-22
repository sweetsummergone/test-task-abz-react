export default function PostUser() {
    return (
        <div className="post" id="post">
            <h2 className="title post__title">Working with POST request</h2>
            <form className="form post__form" action="submit">
                <div className="form__inputs">
                    <label htmlFor="name">
                        <input type="text" name="name" id="name" className="input" placeholder="Your name" required />
                        <span>Your name</span>
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" className="input" placeholder="Email" required />
                        <span>Email</span>
                    </label>
                    <label htmlFor="phone">
                        <input type="tel" name="phone" id="phone" className="input" placeholder="Phone" pattern="+38 ([0-9]{3})-[0-9]{3}-[0-9]{2}-[0-9]{2}" required />
                        <span>Phone</span>
                    </label>
                </div>
                <p className="form__tel-tip">+38 (XXX) XXX - XX - XX</p>
                <div className="position form__position">
                    <p className="position__title">
                        Select your position
                    </p>
                    <div className="position__radios">
                        <div className="position__subject"><input className="position__radio" type="radio" name="position" value="Frontend developer" id="frontend" defaultChecked /><label htmlFor="frontend">Frontend developer</label></div>
                        <div className="position__subject"><input className="position__radio" type="radio" name="position" value="Backend developer" id="backend" /><label htmlFor="backend">Backend developer</label></div>
                        <div className="position__subject"><input className="position__radio" type="radio" name="position" value="Designer" id="designer" /><label htmlFor="designer">Designer</label></div>
                        <div className="position__subject"><input className="position__radio" type="radio" name="position" value="QA" id="qa" /><label htmlFor="qa">QA</label></div>
                    </div>
                </div>
                <div className="form__file-element">
                    <label className="form__file-label" htmlFor="image_uploads">Upload</label>
                    <input type="file" className="form__file-uploader" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png"/>
                    <input type="text" name="file-text" className="input form__preview" placeholder="Upload your photo" readOnly />
                </div>
                <div className="form__submit">
                    <input type="submit" className="button button_disabled form__submit-button" value="Sign up" />
                </div>
            </form>
        </div>
    )
}