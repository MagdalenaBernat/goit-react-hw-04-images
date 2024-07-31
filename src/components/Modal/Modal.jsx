import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, isOpen, onRequestClose }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <img src={largeImageURL} alt="" />
  </ReactModal>
);

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Modal;