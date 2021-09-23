import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickAway } from 'ahooks';
import React, { ReactNode, useRef, useState } from 'react';
import useLongPress from '/imports/hooks/useLongPress';

interface Props {
  onRemove: () => void
  children: ReactNode
}

const ListActions = ({ onRemove, children}: Props) => {
  const [isOptionEnabled, setIsOptionEnabled] = useState<boolean>(false);

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
    <div className="base-200 drawer drawer-end" ref={ref}>
      <input id="drawer-actions" type="checkbox" className="drawer-toggle" checked={isOptionEnabled} onChange={() => {}}/>
      <div className="flex flex-col card bordered bg-neutral drawer-content"  {...longPress}>
        {children}
      </div>
      <div className={'drawer-side'}>
        <label htmlFor="drawer-actions" className="drawer-overlay"></label>
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
