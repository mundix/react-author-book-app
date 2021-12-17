import axios from 'axios';
import { useState } from "react";

export const EntryComponent = ({authorDocEntries: entries = []}) => {

    const [showDetail, setShowDetail] = useState(false);

    const getEntryKey = (entryKey) => {
        const [, ,key ] = entryKey.split("/");
        return key;
    }

    const handleEntryDetail = (entryKey) => {
        const key = getEntryKey(entryKey);
        axios.get(`https://openlibrary.org/works/${key}.json`)
        .then(resp => {
            console.log(resp.data);
        })
    }

    return (
        <ul>
            {
                !!entries && !showDetail && entries.map(entry => {
                    return (
                        <li key={'docDetail_'+getEntryKey(entry.key)} onClick={()=> handleEntryDetail(entry.key)}>
                            {entry.title}
                        </li>
                    )
                })
            }
        </ul>
    )
}
