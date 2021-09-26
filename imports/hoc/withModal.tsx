import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingButton from '../ui/components/FloatingButton';
import Modal from '../ui/components/Modal';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {

}

const withModal = (ModalChildren: any) => (Component: any) => {
  return function (props: Props) {
    const [isShow, setShow] = useState<boolean>(false);
    return (
      <>
        <Component {...props} />
        <FloatingButton onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </FloatingButton>
        <Modal
          isOpen={isShow}
          onClose={() => setShow(false)}
        >
          <ModalChildren {...props} onSubmit={() => { setShow(false) }} />
        </Modal>
      </>
    )
  }

}

export default withModal
