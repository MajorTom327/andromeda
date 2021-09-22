import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onCancel: () => void
  onRemove: () => void
}

const ListActions = ({onCancel, onRemove}: Props) => {
  return (
    <div className="drawer-side">
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <a className="flex gap-4 text-error" onClick={onRemove} >
            <FontAwesomeIcon icon={faTrash} />
            Supprimer
          </a>
        </li>
        <li>
          <a className="flex gap-4" onClick={onCancel} >
            <FontAwesomeIcon icon={faTimes} />
            Annuler
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ListActions
