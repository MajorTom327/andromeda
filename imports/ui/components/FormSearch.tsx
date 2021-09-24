import React from 'react';

interface Props {
  onSearch: (event: string) => void
}

const FormSearch = ({ onSearch }: Props) => {
  return (
    <div className="flex gap-4">
      <input className="input input-bordered flex-1" type="text" placeholder="rechercher..." onChange={e => onSearch(e.currentTarget.value)}/>
    </div>
  )
}

export default FormSearch
