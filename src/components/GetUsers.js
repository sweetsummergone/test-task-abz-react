import React from "react";
import User from "./User";

import { getUsers } from "../utils/api";

export default function GetUsers() {
    const [users, setUsers] = React.useState([]);
    const [pageLimit, setPageLimit] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [buttonClasses, setButtonClasses] = React.useState(["button", "get__more"]);

    function showMore() {
        if (page !== pageLimit) {
            getUsers(page + 1)
            .then(res => {
                const newUserList = [...users];
                newUserList.push(res.users);
                setUsers(newUserList.flat());
                setPage(page + 1);
                if (page === pageLimit - 1) {
                    setButtonClasses([...buttonClasses, "button_disabled"]);
                }
            });
        }
    }

    React.useEffect(() => {
        getUsers()
            .then(res => {
                setUsers(res.users);
                setPageLimit(res.total_pages);
            });
    }, []);

    React.useEffect(() => {
    })

    return (
        <div className="get">
            <h2 className="title get__title">Working with GET request</h2>
            <ul className="get__users">
                {users.map((user, key) => {
                    return (
                        <li className="get__users_user" key={key}><User name={user.name} url={user.photo} position={user.position} email={user.email} phone={user.phone}/></li>
                    )
                })}
            </ul>
            <button onClick={showMore} className={buttonClasses.join(" ")}>Show more</button>
        </div>
    )
}