export default function FileUploader(props) {
    return (
        <>
            <div className="form__file-element">
                <label className={!props.error ? "form__file-label form__file-label_regular" : "form__file-label form__file-label_invalid"} htmlFor="image_uploads">Upload</label>
                <input type="file" onChange={props.handleChange} className="form__file-uploader" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg" />
                <input type="text" name="file-text" className={!props.error ? "input form__preview" : "input form__preview input_invalid"} placeholder="Upload your photo" value={props.fileName} readOnly />
            </div>
            <p className="form__error">{props.error}</p>
        </>
    )
}