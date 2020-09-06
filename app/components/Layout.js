import { h } from 'hyposcript'
import { Nav } from '@/app/components/Nav'

export function Layout ({ children, navSubpage }) {
  return (
    <div id='root'>
      <Nav subpage={navSubpage} />
      {children}
    </div>
  )
}
