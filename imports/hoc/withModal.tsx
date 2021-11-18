import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingButton from '../ui/components/FloatingButton';
import Modal from '../ui/components/Modal';

interface Props {

}

const withModal = (ModalChildren: any) => (Component: any) => {
  return function (props: Props) {
    const [isShow, setShow] = useState<boolean>(false);
    // const cls = isShow ? 'fixed top-0 right-0 bottom-0 left-0 p-4 overflow-y-hidden__' : ''
    const cls = isShow ? 'overflow-y h-screen' : ''
    return (
      <>
        <Component {...props} />
        <FloatingButton onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </FloatingButton>
        {/* <div className={cls}> */}
          <Modal
            isOpen={isShow}
            onClose={() => setShow(false)}
          >
            <ModalChildren {...props} onSubmit={() => { setShow(false) }} />
          </Modal>
        {/* </div> */}
      </>
    )
  }

}

export default withModal
