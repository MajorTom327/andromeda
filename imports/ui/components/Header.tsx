import React from 'react'

interface Props {
  label: string
}

const Header = ({label}: Props) => {
  return (
    <>
      <div className="w-full text-center font-semibold text-2xl">{label}</div>
      <hr className="border-gray-500" />
    </>
  )
}

export default Header
