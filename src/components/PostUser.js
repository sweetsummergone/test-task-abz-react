import Input from "./Input";
import FileUploader from "./FileUploader";
import PositionRadio from "./PositionRadio";
import React from "react";

export default function PostUser() {
    const [errors, setErrors] = React.useState({});
    const [fields, setFields] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [isImageLoaded, setIsImageLoaded] = React.useState(true);
    const [fileName, setFileName] = React.useState("");

    function handleValidation() {
        let newErrors = {};
        let formIsValid = true;
        let currentFields = {...fields};

        // Name
        if (!currentFields["name"]) {
            formIsValid = false;
            newErrors["name"] = "Cannot be empty";
        }
    
        if (typeof currentFields["name"] !== "undefined") {
            if (!currentFields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                newErrors["name"] = "Only letters";
            }
        }
    
        // Email
        if (!currentFields["email"]) {
            formIsValid = false;
            newErrors["email"] = "Cannot be empty";
        }
    
        if (typeof currentFields["email"] !== "undefined") {
            let lastAtPos = currentFields["email"].lastIndexOf("@");
            let lastDotPos = currentFields["email"].lastIndexOf(".");
    
            if (
                !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                currentFields["email"].indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                currentFields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                newErrors["email"] = "Email is not valid";
            }
        }

        // Tel
        if (!currentFields["tel"]) {
            formIsValid = false;
            newErrors["tel"] = "Cannot be empty";
        }

        if (typeof currentFields["tel"] !== "undefined") {
            if (!currentFields["tel"].match(/(^\+38)[0-9]{10}$/)) {
                console.log(currentFields["tel"]);
                formIsValid = false;
                newErrors["tel"] = "+38 (XXX) XXX - XX - XX";
            }
        }

        // Avatar
        if (!isImageLoaded) {
            formIsValid = false;
            newErrors["avatar"] = "Invalid type of file. Image required."
        }

        setErrors(newErrors);
        setIsValid(formIsValid);
    }

    function handleChange(field, e) {
        let newFields = {...fields};
        newFields[field] = e.target.value;
        setFields(newFields);
    }

    function handleAvatarChange(file) {
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

        validFileType(file) ? setIsImageLoaded(true) : setIsImageLoaded(false);
        handleValidation();
        setFileName(`${file.name}`);

        function validFileType(file) {
            return fileTypes.includes(file.type);
        }
    }

    React.useEffect(() => {
        const form = document.querySelector(".post__form");

        function handleSubmit(e) {
            e.preventDefault();
            if (isValid) {
                console.log("Form submitted");
            } else {
                console.log("Form has errors.");
            }
        }

        form.addEventListener("submit", e => {
            handleSubmit(e);
        })

        return () => {
            form.removeEventListener("submit", e => {
                handleSubmit(e);
            })
        }
    }, []);

    React.useEffect(() => {
        handleValidation();
    }, [fields]);

    return (
        <div className="post" id="post">
            <h2 className="title post__title">Working with POST request</h2>
            <form className="form post__form" action="submit" noValidate>
                <div className="form__inputs">
                    <Input name="name" type="text" text="Your name" error={errors.name} maxLength={32} handleChange={e => {handleChange("name", e)}}/>
                    <Input name="email" type="email" text="Email" error={errors.email} maxLength={32} handleChange={e => {handleChange("email", e)}}/>
                    <Input name="phone" type="tel" text="Phone" error={errors.tel} tip="+38 (XXX) XXX - XX - XX" maxLength={13} handleChange={e => {handleChange("tel", e)}}/>
                </div>
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
                <FileUploader handleAvatarChange={handleAvatarChange} error={errors.avatar} fileName={fileName}/>
                <div className="form__submit">
                    {
                        Object.keys(errors).length !== 0 || !isValid
                        ? (<input type="submit" className="button button_disabled form__submit-button" value="Sign up" />)
                        : (<input type="submit" className="button form__submit-button" value="Sign up"/>)
                    }
                </div>
            </form>
        </div>
    )
}