import axios from "axios";
import { useEffect, useState } from "react";

export default function AllUsers() {

    const [users, setUsers] = useState();

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data)
    }

    useEffect(() => {
        loadUsers();
    })

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            {
                users?.map((user) => {
                    return (
                        <tr  key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.nickname}</td>
                            <td>{user.password.slice(0,2)}******</td>
                        </tr>   
                    )
                })
            }

            {/* {users.length == 0 ? "Users not found!" : ""} */}
            </tbody>
        </table>
    );
}