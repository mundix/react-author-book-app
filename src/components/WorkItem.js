import axios from 'axios';

export const WorkItem = ({ work, setWorkEntries, setQuerySearch }) => {

    const handleWorkEntries = async (entryKey = null) => {
        if (!!entryKey) {
            await axios.get(`https://openlibrary.org/authors/${entryKey}/works.json`)
                .then(resp => {
                    setWorkEntries(resp.data.entries);
                    setQuerySearch(work.name);
                })
        }
    }
    return (
        <li className="pe-auto">
            <strong onClick={() => { handleWorkEntries(work.key) }}>{work.name}</strong>
        </li>
    )
}
