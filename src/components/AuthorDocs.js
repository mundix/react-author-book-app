import axios from "axios";
import React, { useContext } from 'react'
import { AuthorContext } from '../contexts/AuthorContext';

export const AuthorDocs = ({ docs = [] }) => {

    const { setIsAuthorDocs, setAuthorDocEntries} = useContext(AuthorContext);
    
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
        <ul>
            {
                docs.map(doc => {
                    return (
                        <li key={doc.key} onClick={()=>{handleAuthorData(doc.key)}}>{doc.name}</li>
                    )
                })
            }
        </ul>
    )
}
