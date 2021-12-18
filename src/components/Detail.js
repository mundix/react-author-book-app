import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const Detail = ({entry}) => {


    const [coverUrl, setCoverUrl] = useState(null);

    const getCoverUrl = (entry) => {
        const cover = entry?.covers ? entry.covers[0] : null;
        const url = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;
        
        if(cover) {
            return url;
        }
        return null;
    }

    useEffect(()=>{
        setCoverUrl(getCoverUrl(entry));
    }, []);

   
    return (
        <div>
            <h2>{entry.title}</h2>
            <hr />
            <div>
                <img src={coverUrl} alt={coverUrl} />
            </div>
        </div>
    )
}

Detail.propTypes = {

}

