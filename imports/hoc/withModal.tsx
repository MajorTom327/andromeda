import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingButton from '../ui/components/FloatingButton';
import Modal from '../ui/components/Modal';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface Props {

}

const withModal = (ModalChildren: any) => (Component: any) => {
  return function (props: Props) {
    const [isShow, setShow] = useState<boolean>(false);
    return (

      <div className={classNames("fixed top-0 right-0 bottom-0 left-0 p-4", {
        "overflow-y-hidden": isShow
      })}>
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
      </div>
    )
  }

}

export default withModal
