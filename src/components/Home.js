import React from "react";
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import users from "./Users";
import {Link, useNavigate} from 'react-router-dom';

function Home() {
    let history = useNavigate();

    const handleEdit = (id, name, permissions) => {
        localStorage.setItem('name', name);
        localStorage.setItem('permissions', permissions);
        localStorage.setItem('id', id);
    }

    const handleDelete = (id) => {
        let index = users.map( function(e) {
            return e.id
        }).indexOf(id);

        users.splice(index, 1);

        history('/');
    }
    return (
        <>
            <div className="p-5 m-5">
                <h1 className="display-4 d-flex mb-4">User Management System</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Permissions</th>
                            <th>Update User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.length > 0
                            ?
                            users.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.permissions}</td>
                                        <td>
                                            <Link to={`/edit`}>
                                                <Button
                                                    onClick={() => handleEdit(item.id, item.name, item.permissions)}
                                                    variant="outline-success"
                                                >
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button
                                                style={{marginLeft: "16px"}}
                                                variant="outline-danger"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <Link to="/add" className="d-flex mr-auto">
                    <Button size="lg">Add New</Button>
                </Link>
            </div>
        </>
    )
}

export default Home;
