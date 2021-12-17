import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export const AuthorBookApp = () => {

    const [state, setState] = useState({ searchQuery: '' });
    const { searchQuery } = state;

    const handleInputChange = ({ target }) => {
        setState({ searchQuery: target.value });
    }


    return (
        <>
            <h1>Author Book App</h1>
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                    type="text" 
                    placeholder="Search by Authors, Books..."
                    onChange={handleInputChange}
                     />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <h2>{searchQuery}</h2>

            </div>
        </>
    )
}
