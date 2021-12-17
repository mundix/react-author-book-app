import axios from "axios";
import { useState } from 'react';

export const AuthorComponent = ({ works = [] }) => {

    const [workEntries, setWorkEntries] = useState(null);

    const handleAuthorEntry = async (authorKey = null) => {
        if (!!authorKey) {
            // setIsAuthorDocs(true);
            await axios.get(`https://openlibrary.org/authors/${authorKey}/works.json`)
                .then(resp => {
                    setWorkEntries(resp.data.entries);
                })
        }
    }

    return (
        <ul>
            {
                works.map(doc => {
                    return (
                        <li key={doc.key} onClick={() => { handleAuthorEntry(doc.key) }}>{doc.name}</li>
                    )
                })
            }
        </ul>
    )
}
