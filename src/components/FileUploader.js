import React from "react"

export default function FileUploader() {
    const [isValid, setIsValid] = React.useState(true);

    function handleUploadFile(file) {
        const fileTypes = [
            "image/apng",
            "image/bmp",
            "image/gif",
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/svg+xml",
            "image/tiff",
            "image/webp",
            "image/x-icon"
        ];
        const para = document.querySelector('.form__preview');

        if (file === undefined) {
            para.placeholder = 'Upload your photo';
        } else {
            if (validFileType(file)) {
                setIsValid(true);
                para.value = `${file.name}`;
            } else {
                setIsValid(false);
                para.value = "";
                para.placeholder = `Not a valid file type.`;
            }
        }

        function validFileType(file) {
            return fileTypes.includes(file.type);
        }
    }

    React.useEffect(() => {
        const input = document.querySelector('.form__file-uploader');

        input.addEventListener("change", e => {
            handleUploadFile(e.target.files[0])
        });

        return () => {
            input.removeEventListener("change", e => {
                handleUploadFile(e.target.files[0])
            });
        }
    }, []);

    return (
        <div className="form__file-element">
            <label className={isValid ? "form__file-label form__file-label_regular" : "form__file-label form__file-label_invalid"} htmlFor="image_uploads">Upload</label>
            <input type="file" className="form__file-uploader" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" />
            <input type="text" name="file-text" className={isValid ? "input form__preview" : "input form__preview input_invalid"} placeholder="Upload your photo" readOnly />
        </div>
    )
}