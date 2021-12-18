import axios from 'axios';
import { useState } from "react";

export const Entry = ({ entry, setEntry, setQuerySearch }) => {

    const getEntryKey = (entryKey) => {
        const [, , key] = entryKey.split("/");
        return key;
    }

    const handleEntryDetail = (entryKey) => {
        const key = getEntryKey(entryKey);
        axios.get(`https://openlibrary.org/works/${key}.json`)
            .then(resp => {
                setEntry(resp.data);
                setQuerySearch(entry.title)
            })
    }

    return (
        <li className="pe-auto">
        <strong onClick={() => { handleEntryDetail(entry.key) }}>{entry.title}</strong>
    </li>
    )
}
