import Input from "./Input";
import FileUploader from "./FileUploader";
import PositionRadio from "./PositionRadio";
import React, { useCallback } from "react";
import success from "../images/success-image.svg";
import preloader from "../images/Preloader.svg";
import { validateForm } from "../utils/formValidator";
import { getPositions, getUsers, postUser } from "../utils/api";
// Redux
import { useDispatch } from 'react-redux'
import { init } from '../features/users/usersSlice'

export default function PostUser() {
    // States
    const [positions, setPositions] = React.useState([]);
    const [errors, setErrors] = React.useState({});
    const [fields, setFields] = React.useState({"position" : 1});
    const [fileName, setFileName] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isFilled, setIsFilled] = React.useState(false);
    // Ref
    const isSent = React.useRef(false);
    // Dispatch
    const dispatch = useDispatch();
    // Callback
    const handleValidation = useCallback(() => {
        const [formIsValid, newErrors] = validateForm(fields);
        setErrors(newErrors);
        if (formIsValid) submitForm();
    }, [fields]);

    function submitForm() {
        setIsLoading(true);
        formPostUser();
    }

    function handleChange(field, e) {
        let newFields = {...fields};
        if (field === "avatar") {
            newFields[field] = e.target.files[0];
            setFileName(`${e.target.files[0].name}`);
        }
        else if (field === "position") {
            newFields[field] = e.target.id;
        }
        else {
            newFields[field] = e.target.value;
        }
        setFields(newFields);
        setErrors({});
    }

    function formPostUser() {
        postUser({name: fields.name, email: fields.email, position: fields.position, phone: fields.phone, avatar: fields.avatar})
        .then(res => {
            if (!res.success) {
                setErrors({"email" : res.message, "phone" : res.message});
            } else {
                isSent.current = true;
                getUsers()
                    .then(res => {
                        dispatch(init(res.users));
                    })
            }
            setIsLoading(false);
        });
    }

    React.useEffect(() => {
        const form = document.querySelector(".post__form");
        
        getPositions()
            .then(res => {
                if(res.success) {
                    setPositions(res.positions);
                }
            })

        form.addEventListener("submit", e => {
            handleSubmit(e);
        });

        function handleSubmit(e) {
            e.preventDefault();
        }

        return () => {
            form.removeEventListener("submit", e => {
                handleSubmit(e);
            })
        }
    }, []);

    React.useEffect(() => {
        if (Object.keys(fields).length === 5) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    }, [fields]);

    if (!isSent.current && !isLoading) {
        return (
            <div className="post" id="post">
                <h2 className="title post__title">Working with POST request</h2>
                <form className="form post__form" action="submit" noValidate>
                    <div className="form__inputs">
                        <Input value={fields.name} name="name" type="text" text="Your name" error={errors.name} minLength={2} maxLength={32} handleChange={e => {handleChange("name", e)}}/>
                        <Input value={fields.email} name="email" type="email" text="Email" error={errors.email} maxLength={32} handleChange={e => {handleChange("email", e)}}/>
                        <Input value={fields.phone} name="phone" type="tel" text="Phone" error={errors.phone} tip="+38 (XXX) XXX - XX - XX" maxLength={13} handleChange={e => {handleChange("phone", e)}}/>
                    </div>
                    <div className="position form__position">
                        <p className="position__title">
                            Select your position
                        </p>
                        <div className="position__radios">
                            {
                                positions.map((position, key) => {
                                    return key === 0 
                                    ? (<PositionRadio onChange={e => handleChange("position", e)} key={position.id} id={position.id} name={position.name} checked />) 
                                    : (<PositionRadio onChange={e => handleChange("position", e)} key={position.id} id={position.id} name={position.name} />) ;
                                })
                            }
                        </div>
                    </div>
                    <FileUploader handleChange={e => {handleChange("avatar", e)}} error={errors.avatar} fileName={fileName}/>
                    <div className="form__submit">
                        {
                            !isFilled
                            ? (<input type="button" className="button button_disabled form__submit-button" value="Sign up" />)
                            : (<input type="submit" onClick={handleValidation} className="button button_available form__submit-button" value="Sign up"/>)
                        }
                    </div>
                </form>
            </div>
        )
    } else if (isSent.current && !isLoading) {
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