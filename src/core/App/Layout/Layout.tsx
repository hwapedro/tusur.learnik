import React, { FC } from 'react'

import { NavMenu } from './NavMenu/NavMenu'
import { Header } from './Header/Header'
import { QueueTicket } from './QueueTicket/QueueTicket'

import { LayoutProps } from './Layout.inteface'

export const Layout: FC<LayoutProps> = ({ children }) => {
  const windowWidth = window.innerWidth

  return (
    <>
      <Header />
      {windowWidth > 448 && <NavMenu />}
      <QueueTicket />
      {children}
    </>
  )
}
