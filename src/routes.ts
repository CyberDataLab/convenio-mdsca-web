export type StaticRoute = '/' | '/participantes' | '/actualidad'
export type Route = StaticRoute | `/actualidad/${string}`

export const routes: { href: StaticRoute; label: string }[] = [
  { href: '/', label: 'Inicio' },
  { href: '/participantes', label: 'Participantes' },
  { href: '/actualidad', label: 'Actualidad' },
]

export function getRoute(): Route {
  const path = window.location.hash.replace(/^#/, '').replace(/\/$/, '') || '/'
  if (routes.some((route) => route.href === path)) return path as StaticRoute
  if (/^\/actualidad\/[^/]+$/.test(path)) return path as `/actualidad/${string}`
  return '/'
}
