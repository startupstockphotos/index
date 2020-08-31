import React from 'react'
import { Nav } from '@/app/components/Nav'

export function Layout ({
  children,
  navSubpage
}: React.PropsWithChildren<{ navSubpage?: string }>) {
  return (
    <div id='root'>
      <Nav subpage={navSubpage} />
      {children}
    </div>
  )
}
