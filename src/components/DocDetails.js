
export const DocDetails = ({authorDocEntries = []}) => {

    const getEntryKey = (entryKey) => {
        const [, ,key ] = entryKey.split("/");
        return key;
    }

    return (
        <ul>
            {
                !!authorDocEntries && authorDocEntries.map(entry => {
                    return (<li key={'DocDetails_'+getEntryKey(entry.key)}>{entry.title}</li>)
                })
            }
        </ul>
    )
}
