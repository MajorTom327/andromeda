import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickAway } from 'ahooks';
import React, { ReactNode, useRef, useState } from 'react';
import useLongPress from '/imports/hooks/useLongPress';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onRemove: () => void
  children: ReactNode
}

const ListActions = ({ onRemove, children }: Props) => {
  const [isOptionEnabled, setIsOptionEnabled] = useState<boolean>(false);
  const uuid = uuidv4();

  const ref = useRef<HTMLDivElement>();

  const longPress = useLongPress(
    () => {
      setIsOptionEnabled(true);
    },
    () => { }, {
    shouldPreventDefault: true,
    delay: 500,
  })

  useClickAway(() => {
    setIsOptionEnabled(false);
  }, ref);
  const handleCancel = () => setIsOptionEnabled(false);
  return (
    <div className="base-200 drawer drawer-end overflow-x-hidden" ref={ref}>
      <input readOnly id={`drawer-actions-${uuid}`} type="checkbox" className="drawer-toggle" checked={isOptionEnabled} onChange={() => { }} />
      <Card className="drawer-content" {...longPress}>
        {children}
      </Card>
      <div className={'drawer-side overflow-x-hidden'}>
        <label htmlFor={`drawer-actions-${uuid}`} className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a className="flex gap-4 text-error" onClick={onRemove} >
              <FontAwesomeIcon icon={faTrash} />
              Supprimer
            </a>
          </li>
          <li>
            <a className="flex gap-4" onClick={handleCancel} >
              <FontAwesomeIcon icon={faTimes} />
              Annuler
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListActions
