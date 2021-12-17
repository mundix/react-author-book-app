import React, { useState } from 'react';

export const AuthorBookApp = () => {

    const [state, setState] = useState({searchQuery: ''});
    const {searchQuery} = state;

    const handleInputChange = ({target}) => {
        // console.log(target.value);
        setState({searchQuery: target.value});
    }


    return (
        <>
           <h1>Author Book App</h1> 
           <div>
               <input 
                    type="text" 
                    className="form-control" 
                    name='searchQuery'
                    onChange={handleInputChange}
                    />
            <h2>{searchQuery}</h2>

           </div>
        </>
    )
}
