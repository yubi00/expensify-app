import React from 'react'
import Modal from 'react-modal'

const RemoveModal = (props) => (
    <Modal
        isOpen={props.modalOpen}
        ariaHideApp={false}
        closeTimeoutMS={200}
        contentLabel="remove expense"
        onRequestClose={props.handleCloseModal}
        className="modal"
    >
    <h2 className="modal__title">Are you sure?</h2>    
    <div className="modal__box">
            <button className="button button--remove" onClick={props.onRemove}>Delete</button>
            <button className="button" onClick={props.handleCloseModal}>Cancel</button>
        </div>  
    </Modal>
)

export default RemoveModal