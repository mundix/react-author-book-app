import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export const AuthorBookApp = () => {

    const [authorDocs, setAuthorDocs] = useState(null);

    const handleInputChange = ({ target }) => {
        axios.get(`https://openlibrary.org/search/authors.json?q=${target.value}`)
            .then(resp => {
                setAuthorDocs(resp.data.docs);
            })
    }

    return (
        <>
            <div className='row col-10 d-flex'>
                <div className="form-group ">
                    <input
                        className='form-control p-4 justify-center'
                        type="text"
                        className="form-control"
                        onChange={handleInputChange}
                        placeholder='Type Author or Book name ... '
                    />
                </div>
                {
                    !!authorDocs && (
                        <ul>
                            {
                                authorDocs.map(doc => {
                                    return (
                                        <li key={doc.key}>{doc.name}</li>
                                    )
                                })
                            }
                        </ul>
                    )
                }

            </div>
        </>
    )
}
