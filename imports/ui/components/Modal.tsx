import classNames from 'classnames';
import React from 'react';
// import ReactModal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  isOpen: boolean,
  actions?: JSX.Element,
  onClose: () => void
};

const Modal: React.FC<Props> = ({ children, isOpen, onClose, actions }) => {
  const uuid = uuidv4();


  return (
    <>
      <input id={`modal-${uuid}`} type="checkbox" className="modal-toggle" checked={isOpen} />
      <div className="modal">
        <div className="modal-box">
          <div className="float-right relative -top-2 -right-2">
            <button className="btn btn-ghost btn-sm" onClick={onClose}>x</button>
          </div>
          <div>
            {children}
          </div>
          <div className="modal-action">
            {actions}
          </div>
        </div>
      </div>
    </>
  )
}

Modal.defaultProps = {
};

export default Modal;