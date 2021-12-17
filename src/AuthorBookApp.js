import axios from 'axios';
import React, { useState } from 'react';
import { AuthorContext } from './contexts/AuthorContext';
import { AuthorDocs } from './components/AuthorDocs';
import { DocDetails } from './components/DocDetails';
import { EntriesContext } from './contexts/EntriesContext';

export const AuthorBookApp = () => {

    const [authorDocs, setAuthorDocs] = useState(null);
    const [isAuthorDocs, setIsAuthorDocs] = useState(false);
    const [authorDocEntries, setAuthorDocEntries] = useState(null);

    const handleInputChange = async ({ target }) => {
        setIsAuthorDocs(false);
        if (!isAuthorDocs) {

            await axios.get(`https://openlibrary.org/search/authors.json?q=${target.value}`)
                .then(resp => {
                    setAuthorDocs(resp.data.docs);
                })
        }
    }

    const handleAuthorData = async (authorKey = null) => {
        if(!!authorKey) {
            setIsAuthorDocs(true);
            await axios.get(`https://openlibrary.org/authors/${authorKey}/works.json`)
                .then(resp => {
                    setAuthorDocEntries(resp.data.entries);
                })
        }
    }

    return (
        <AuthorContext.Provider value={{authorDocs, setAuthorDocs}}>
            <EntriesContext.Provider value={{authorDocs, setAuthorDocs, isAuthorDocs, setIsAuthorDocs}}>
            <div className='row col-10 d-flex p-5'>
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
                    !!authorDocs && !isAuthorDocs && (
                        <AuthorDocs docs={authorDocs} handleAuthorData={handleAuthorData} />
                    )
                }
                {
                    isAuthorDocs && (
                        <DocDetails authorDocEntries={authorDocEntries}/>
                    )
                }

            </div>
            </EntriesContext.Provider>
        </AuthorContext.Provider>
    )
}
