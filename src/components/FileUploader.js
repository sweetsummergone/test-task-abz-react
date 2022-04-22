import React from "react"

export default function FileUploader() {
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
        const input = document.querySelector('.form__file-uploader');
        const para = document.querySelector('.form__preview');

        input.style.opacity = 0;

        if (file === undefined) {
            para.placeholder = 'Upload your photo';
        } else {
            if (validFileType(file)) {
                para.value = `${file.name}`;
            } else {
                para.value = `Not a valid file type.`;
            }
        }

        function validFileType(file) {
            return fileTypes.includes(file.type);
        }
    }

    React.useEffect(() => {
        const input = document.querySelector('.form__file-uploader');

        function setupEventListener(e) {
            handleUploadFile(e.target.files[0]) 
        }

        input.addEventListener("change", e => {
            setupEventListener(e)
        });
        
        return () => {
            input.removeEventListener("change", e => {
                setupEventListener(e);
            })
        }
    }, [])

    return (
        <div className="form__file-element">
            <label className="form__file-label" htmlFor="image_uploads">Upload</label>
            <input type="file" className="form__file-uploader" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" />
            <input type="text" name="file-text" className="input form__preview" placeholder="Upload your photo" readOnly />
        </div>
    )
}