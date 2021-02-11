import React, { useState, useEffect } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import Axios from "../src/service/usersService";

const App = () => {

    const initialUser = { id: null, name: "", username: "" };
    const [currentUser, setCurrentUser] = useState(initialUser);
    const [editing, setEditing] = useState(false);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        listUser();
    }, []);

    // refresh
    const refreshList = () => {
        listUser();
    };

    // READ
    const listUser = async () => {
        await Axios.getAll()
            .then(response => {
                setUsers(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // CREATE
    const addUser = async (user) => {
        await Axios.create(user)
            .then(() => {
                setUsers(user)
                refreshList();
            })
            .catch(err => {
                console.log(err);
            });
    };


    // EDIT
    const editUser = (id, user) => {
        setEditing(true);
        setCurrentUser(user);
    };
    // UPDATE
    const updateUser = async (id, user) => {
        await Axios.update(id._id, id)
            .then(() => {
                setUsers(id)
                setEditing(false);
                refreshList();
            })
            .catch(err => {
                console.log(err);
            });
    };

    // DELETE
    const deleteUser = async (id) => {
        await Axios.remove(id)
            .then(() => {
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="row">
                <div className="five columns">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                currentUser={currentUser}
                                setEditing={setEditing}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser} />
                            </div>
                        )}
                </div>
                <div className="seven columns">
                    <h2>View users</h2>
                    <UserTable
                        users={users}
                        deleteUser={deleteUser}
                        editUser={editUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;