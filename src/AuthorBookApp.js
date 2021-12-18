import axios from 'axios';
import React, { useState } from 'react';
import { Detail } from './components/Detail';
import { Entry } from './components/Entry';
import { WorkItem } from './components/WorkItem';

export const AuthorBookApp = () => {

    const [querySearch, setQuerySearch] = useState(null);
    const [authorWorks, setAuthorWorks] = useState(null);
    const [isAuthorHasWorks, setIsAuthorHasWorks] = useState(false);
    const [workEntries, setWorkEntries] = useState(null);
    const [entry, setEntry] = useState(null);


    const handleInputChange = ({ target }) => {
        setQuerySearch(target.value);
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {

            setIsAuthorHasWorks(false);
            setWorkEntries(null);
            setEntry(null);

            if (!isAuthorHasWorks) {

                await axios.get(`https://openlibrary.org/search/authors.json?q=${querySearch}`)
                    .then(resp => {
                        setAuthorWorks(resp.data.docs);
                        setIsAuthorHasWorks(true);
                    })
            }
        }
    }


    return (
        <div className='row col-10 d-flex p-5'>
            <div className="form-group ">
                <input
                    className='form-control p-4 justify-center'
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder='Type Author or Book name ... '
                />
                <small>Search for: {querySearch}</small>
            </div>
            <div>
                {
                    entry === null
                        ? (
                            <ul className='mt-3'>
                                {
                                    !!authorWorks && workEntries === null && authorWorks.map(work => <WorkItem key={'work_' + work.key} work={work} setWorkEntries={setWorkEntries} setQuerySearch={setQuerySearch} />)
                                }
                                {
                                    !!workEntries && workEntries.map(entry => <Entry key={'entry_' + entry.key} entry={entry} setEntry={setEntry} setQuerySearch={setQuerySearch} />)
                                }
                            </ul>
                        )
                        : (<Detail entry={entry}/>)
                }
            </div>
        </div>
    )
}
