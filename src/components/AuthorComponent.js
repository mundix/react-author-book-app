import axios from "axios";
import { useEffect, useState } from 'react';

export const AuthorComponent = ({ works = [] }) => {

    const [workEntries, setWorkEntries] = useState(null);

    useEffect(() => {
        setWorkEntries(false);
    }, []);

    const handleAuthorEntry = async (authorKey = null) => {
        if (!!authorKey) {
            setWorkEntries(true);
            await axios.get(`https://openlibrary.org/authors/${authorKey}/works.json`)
                .then(resp => {
                    setWorkEntries(resp.data.entries);
                })
        }
    }

    return (
        <>
            {
                !workEntries ? (()=>{
                    <ul>
                         {works.map(doc => {
                             (
                                <li key={doc.key} onClick={() => { handleAuthorEntry(doc.key) }}>{doc.name}</li>
                             )
                         })}
                    </ul>
                }) 
                : null
                
            }
        </>
    )
}
