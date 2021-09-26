import React, { ReactNode } from 'react'
import classNames from 'classnames';

interface Props {
  className?: string,
  children: ReactNode
}

const Container = ({className, children}: Props) => {
  const clsName = classNames('flex flex-col gap-4', className)
  return <div className={clsName}>{children}</div>

}

export default Container
