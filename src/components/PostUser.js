import Input from "./Input";
import FileUploader from "./FileUploader";
import PositionRadio from "./PositionRadio";
import React from "react";
import userReducer from "../reducers/usersReducer";
import success from "../images/success-image.svg";
import preloader from "../images/Preloader.svg";
import { validateForm } from "../utils/formValidator";
import { getUsers, getToken, postUser } from "../utils/api";

export default function PostUser() {
    const [errors, setErrors] = React.useState({});
    const [fields, setFields] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [fileName, setFileName] = React.useState("");
    const [isSent, setIsSent] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [users, dispatch] = React.useReducer(userReducer, []);

    function handleValidation() {
        const [formIsValid, newErrors] = validateForm(fields);
        setErrors(newErrors);
        setIsValid(formIsValid);
    }

    function handleChange(field, e) {
        let newFields = {...fields};
        if (field !== "avatar") {
            newFields[field] = e.target.value;
        } else {
            newFields[field] = e.target.files[0];
            setFileName(`${e.target.files[0].name}`);
        }
        setFields(newFields);
    }

    function formPostUser() {
        if (isValid) {
            getToken()
                .then(res => {
                    return res;
                })
                .then(token => {
                    let user = new FormData();
                    user.append("position_id", 1); // Temponary to check POST query
                    user.append("name", fields.name);
                    user.append("email", fields.email);
                    user.append("phone", fields.phone);
                    user.append("photo", fields.avatar);
                    return postUser(token, user);
                })
                .then(() => {
                    getUsers()
                    .then(res => {
                        dispatch({type: "POST", users: res.users});
                        console.log(users);
                        setIsLoading(false);
                    })
                    .catch(err => {
                        console.error(err);
                    });
                })
                .catch(err => {
                    console.error(err);
                });
            
        }
    }

    React.useEffect(() => {
        const form = document.querySelector(".post__form");

        function handleSubmit(e) {
            e.preventDefault();
            setIsLoading(true);
            setIsSent(true);
        }

        form.addEventListener("submit", e => {
            handleSubmit(e);
        });

        return () => {
            form.removeEventListener("submit", e => {
                handleSubmit(e);
            })
        }
    }, []);

    React.useEffect(() => {
        handleValidation();
    }, [fields, isValid]);

    React.useEffect(() => {
        formPostUser();
    }, [isSent]);

    if (!isSent && !isLoading) {
        return (
            <div className="post" id="post">
                <h2 className="title post__title">Working with POST request</h2>
                <form className="form post__form" action="submit" noValidate>
                    <div className="form__inputs">
                        <Input name="name" type="text" text="Your name" error={errors.name} minLength={2} maxLength={32} handleChange={e => {handleChange("name", e)}}/>
                        <Input name="email" type="email" text="Email" error={errors.email} maxLength={32} handleChange={e => {handleChange("email", e)}}/>
                        <Input name="phone" type="tel" text="Phone" error={errors.phone} tip="+38 (XXX) XXX - XX - XX" maxLength={13} handleChange={e => {handleChange("phone", e)}}/>
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
                    <FileUploader handleChange={e => {handleChange("avatar", e)}} error={errors.avatar} fileName={fileName}/>
                    <div className="form__submit">
                        {
                            Object.keys(errors).length !== 0 || !isValid
                            ? (<input type="button" className="button button_disabled form__submit-button" value="Sign up" />)
                            : (<input type="submit" className="button form__submit-button" value="Sign up"/>)
                        }
                    </div>
                </form>
            </div>
        )
    } else if (isSent && !isLoading) {
        return (
            <div className="post" id="post">
                <h2 className="title post__title">User successfully registered</h2>
                <img className="post__image" src={success} alt="Success form submit image" />
            </div>
        )
    } else {
        return (
            <div className="post" id="post">
                <img src={preloader} className="preloader"></img>
            </div>
        )
    }
}