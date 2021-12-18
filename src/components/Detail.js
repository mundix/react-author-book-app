import { ListGroup, Stack } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const Detail = ({ entry }) => {


    const [coverUrl, setCoverUrl] = useState(null);

    const getCoverUrl = (entry) => {
        const cover = entry?.covers ? entry.covers[0] : null;
        const url = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;

        if (cover) {
            return url;
        }
        return null;
    }

    useEffect(() => {
        setCoverUrl(getCoverUrl(entry));
    }, []);


    return (
        <Stack direction="horizontal" gap={2}>
            <div className="bg-light border">
                <img src={coverUrl} alt={coverUrl} />
            </div>
            <div className="bg-light border">
                <Stack gap={5}>
                    <div className="bg-light border"><strong>{entry.title}</strong></div>
                    <div className="bg-light border">Posted <strong>{new Date(entry.created.value).toDateString()}</strong></div>
                    <div className="bg-light border">{entry.description && entry.description.value}</div>
                    <div className="bg-light border">
                        <small>Links</small>
                        <ListGroup>
                            {
                                entry.links.map(link => <ListGroup.Item><a href={link.url}>{link.title}</a></ListGroup.Item>)
                            }
                        </ListGroup>
                    </div>
                    <div className="bg-light border"><small>Subjects</small>
                        <ListGroup>
                            {
                                entry.subjects.map(subject => <ListGroup.Item><small>{subject}</small></ListGroup.Item>)
                            }
                        </ListGroup>
                    </div>
                </Stack>
            </div>
        </Stack>
    )
}

Detail.propTypes = {

}

