import React from "react";
import User from "./User";
import preloader from "../images/Preloader.svg";
import userReducer from "../reducers/usersReducer";

import { getUsers } from "../utils/api";

export default function GetUsers() {
    const [users, dispatch] = React.useReducer(userReducer, []);
    const [pageLimit, setPageLimit] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [buttonClasses, setButtonClasses] = React.useState(["button", "get__more"]);
    const [isLoading, setIsLoading] = React.useState(false);

    function showMore() {
        if (page !== pageLimit) {
            setIsLoading(true);
            getUsers(page + 1)
                .then(res => {
                    const newUserList = [...users];
                    newUserList.push(res.users);
                    dispatch({type: "GET", users: newUserList.flat()})
                    setPage(page + 1);
                    setIsLoading(false);
                    if (page === pageLimit - 1) {
                        setButtonClasses([...buttonClasses, "button_disabled"]);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }

    React.useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then(res => {
                dispatch({type: "INIT", users: res.users})
                setPageLimit(res.total_pages);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
            });;
    }, []);

    return (
        <div className="get" id="get">
            <h2 className="title get__title">Working with GET request</h2>
            <ul className="get__users">
                {users.map((user, key) => {
                    return (
                        <li className="get__users_user" key={key}><User name={user.name} url={user.photo} position={user.position} email={user.email} phone={user.phone}/></li>
                    )
                })}
            </ul>
            {isLoading ? (<img className="preloader" src={preloader} />) : (<button onClick={showMore} className={buttonClasses.join(" ")}>Show more</button>)}
        </div>
    )
}