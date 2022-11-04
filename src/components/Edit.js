import React, { useState, useEffect } from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import users from "./Users";
import {useNavigate} from 'react-router-dom';

export default function Edit() {
    const [name, setName] = useState('')
    const [permissions, setPermissions] = useState('')
    const [id, setId] = useState('')

    let history = useNavigate();

    let index = users.map(function(e) {
        return e.id
    }).indexOf(id)

    const handleSubmit = (e) => {
        e.preventDefault();

        let u = users[index];
        u.name = name;
        u.permissions = permissions;

        history('/')
    }

    useEffect( () => {
        setName(localStorage.getItem('name'));
        setPermissions(localStorage.getItem('permissions'));
        setId(localStorage.getItem('id'));
    }, []);


    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <h1 className="display-4 d-flex mb-4">Edit User</h1>
                <Form.Group className='mb-3' controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formPermissions">
                    <Form.Control
                        type="text"
                        placeholder="Enter Permissions"
                        value={permissions}
                        required
                        onChange={(e) => setPermissions(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button className="w-25" onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}
