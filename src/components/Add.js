import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import users from "./Users";
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom';

export default function Add() {
    const [name, setName] = useState('');
    const [permissions, setPermissions] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let n = name;
        let p = permissions;

        users.push({id: uniqueId, name: n, permissions: p});

        history('/')
    }

    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <h1 className="display-4 d-flex mb-4">Add New User</h1>
                <Form.Group className='mb-3' controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        required
                        onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formPermissions">
                    <Form.Control
                        type="text"
                        placeholder="Enter Permissions"
                        required
                        onChange={(e) => setPermissions(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button className="w-25" onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}
