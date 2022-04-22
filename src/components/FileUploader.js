import React from "react"

export default function FileUploader(props) {
    function handleChange(file) {
        props.handleAvatarChange(file)
    }

    React.useEffect(() => {
        const input = document.querySelector('.form__file-uploader');

        input.addEventListener("change", e => {
            handleChange(e.target.files[0])
        });

        return () => {
            input.removeEventListener("change", e => {
                handleChange(e.target.files[0])
            });
        }
    }, []);

    return (
        <>
            <div className="form__file-element">
                <label className={!props.error ? "form__file-label form__file-label_regular" : "form__file-label form__file-label_invalid"} htmlFor="image_uploads">Upload</label>
                <input type="file" onChange={e => {handleChange(e.target.files[0])}} className="form__file-uploader" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" />
                <input type="text" name="file-text" className={!props.error ? "input form__preview" : "input form__preview input_invalid"} placeholder="Upload your photo" value={props.fileName} readOnly />
            </div>
            <p className="form__error">{props.error}</p>
        </>
    )
}