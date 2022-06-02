import React, { useState } from 'react'
import { Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import 'bootstrap/dist/css/bootstrap.min.css';


const Add = ({ getNewMovie }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({ "title": "", "description": "", "posterUrl": "", "rating": 0, });
    const handleChange = (e) => {
        //console.log(e.target.value)
        //console.log(e.target.name)
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        if (newMovie.title) {
            getNewMovie(newMovie);
            setNewMovie({ "title": "", "description": "", "posterUrl": "", "rating": 0 })
            handleClose()
        }
        else { alert("title is required") }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new Movie </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" required name="title" value={newMovie.title} placeholder="title" onChange={handleChange} />
                    <input type="text" name="description" value={newMovie.description} placeholder="description" onChange={handleChange} />
                    <input type="url" name="posterUrl" value={newMovie.posterUrl} placeholder="poster URL" onChange={handleChange} />
                    <input type="number" name="rating" value={newMovie.rating} placeholder="rating" onChange={handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Add