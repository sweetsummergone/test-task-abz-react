export function validateForm(fields) {
    let errors = {};
    let formIsValid = true;
    let currentFields = {...fields};

    // Name
    if (!currentFields["name"]) {
        formIsValid = false;
        errors["name"] = "Cannot be empty";
    }

    if (typeof currentFields["name"] !== "undefined") {
        if (!currentFields["name"].match(/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
        }
    }

    // Email
    if (!currentFields["email"]) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
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
            errors["email"] = "Email is not valid";
        }
    }

    // Tel
    if (!currentFields["phone"]) {
        formIsValid = false;
        errors["phone"] = "Cannot be empty";
    }

    if (typeof currentFields["phone"] !== "undefined") {
        if (!currentFields["phone"].match(/(^\+38)[0-9]{10}$/)) {
            formIsValid = false;
            errors["phone"] = "+38 (XXX) XXX - XX - XX";
        }
    }

    // Avatar
    if (typeof currentFields["avatar"] !== "undefined") {
        if (currentFields["avatar"].type !== "image/jpeg") {
            formIsValid = false;
            errors["avatar"] = "Invalid type of file. JPEG image required."
        }

        if (currentFields["avatar"].size / 1024 / 1024 > 5) {
            formIsValid = false;
            errors["avatar"] = "File size should be less than 5Mb."
        }
    }

    return [formIsValid, errors]
}