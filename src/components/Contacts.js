import GetUsers from "./GetUsers";
import PostUser from "./PostUser";

export default function Contacts() {
    return (
        <main className="contacts">
            <GetUsers />
            <PostUser />
        </main>
    )
}