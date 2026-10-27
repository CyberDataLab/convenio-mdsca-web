import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import type { Route } from '../routes'

type AppLinkProps = {
  href: Route
  children: ReactNode
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function AppLink({ href, children, className = '', ...props }: AppLinkProps) {
  const url = `${import.meta.env.BASE_URL}#${href}`

  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    window.history.pushState({}, '', url)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <a href={url} onClick={navigate} className={className} {...props}>{children}</a>
}
