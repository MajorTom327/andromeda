import React from 'react';
import ReactModal from 'react-modal';

type Props = {
  isOpen: boolean,
  onClose: () => void
};

ReactModal.setAppElement('#react-target');

const style = {
  overlay: {
    // position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    color: '#fff',
    top: '8rem',
    left: '8rem',
    right: '8rem',
    bottom: '8rem',
    border: 'none',
    background: '#4B5563',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: 16,
    outline: 'none',
    padding: '20px'
  }
}

const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      {children}
    </ReactModal>
  );
}

Modal.defaultProps = {
};

export default Modal;