import { use } from "react";

const Users = ({ fetchUsers }) => {

    const users = use(fetchUsers);
    console.log(users);
    

    return (
        <div className="card">
            <h2>Users</h2>
            <p>Total users: {users.length}</p>
        </div>
    );
};

export default Users;
