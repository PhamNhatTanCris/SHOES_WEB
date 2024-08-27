import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDelete = (props) => {
    console.log('data model delete: ', props.dataModalDelete)

    return (

        <>

            <Modal show={props.isShowModalDelete} onHide={props.handleCloseModalDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, Are you confirm delete this user: {props.dataModalDelete ? props.dataModalDelete.email : ''}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleCloseModalDelete}>
                        No
                    </Button>
                    <Button variant="primary" onClick={props.confirmDelete} >
                        Yes
                        
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDelete