import React from "react";
import User from "./User";
import preloader from "../images/Preloader.svg";
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { get, init, addPage } from '../features/users/usersSlice'
// Utils
import { getUsers } from "../utils/api";

export default function GetUsers() {
    const [pageLimit, setPageLimit] = React.useState(0);
    const [buttonClasses, setButtonClasses] = React.useState(["button", "get__more"]);
    const [isLoading, setIsLoading] = React.useState(false);

    const users = useSelector(state => state.users.value);
    const page = useSelector(state => state.users.page);
    const dispatch = useDispatch();

    function showMore() {
        dispatch(addPage());
    }

    React.useEffect(() => {
        if (page !== pageLimit && page !== 1) {
            setIsLoading(true);
            getUsers(page)
                .then(res => {
                    dispatch(get(res.users));
                    setIsLoading(false);
                    if (page === pageLimit - 1) {
                        setButtonClasses([...buttonClasses, "button_disabled"]);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        } else if (page === 1) {
            setButtonClasses(["button", "get__more"]);
        }
    }, [page]);

    React.useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then(res => {
                dispatch(init(res.users))
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