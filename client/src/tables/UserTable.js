import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {

                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(user._id)}>Delete</button>
                                    <button onClick={() => props.editUser(user._id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                        <tr>
                            <td colSpan={4}>No users found</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable;