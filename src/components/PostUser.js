export default function PostUser() {
    return (
        <div className="post" id="post">
            <h2 className="title post__title">Working with POST request</h2>
            <form className="form post__form" action="submit">
                <input type="text" name="name" className="input" placeholder="Your name" required />
                <input type="email" name="email" className="input" placeholder="Email" required />
                <input type="tel" name="phone" className="input" placeholder="Phone" pattern="+38 ([0-9]{3})-[0-9]{3}-[0-9]{2}-[0-9]{2}" required />
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
                    <div className="form__preview">
                        <p className="form__preview-text">Upload your photo</p>
                    </div>
                </div>
                <div className="form__submit">
                    <input type="submit" className="button button_disabled form__submit-button" value="Sign up" />
                </div>
            </form>
        </div>
    )
}