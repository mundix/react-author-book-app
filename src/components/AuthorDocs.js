export const AuthorDocs = ({ docs = [], handleAuthorData }) => {
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
