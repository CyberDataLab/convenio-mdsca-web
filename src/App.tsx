import { useEffect, useState } from 'react'
import { AppLink } from './components/AppLink'
import { project } from './content'
import { getRoute, routes } from './routes'
import type { Route } from './routes'
import { assetUrl } from './assetUrl'
import { Home } from './views/Home'
import { News } from './views/News'
import { NewsDetail } from './views/NewsDetail'
import { Participants } from './views/Participants'
import './App.css'

function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-branding">
          <div className="institutional-logos" aria-label="Entidades participantes">
            <img className="umu-header-logo" src={assetUrl('LogosimboloUMU-positivo.png')} alt="Universidad de Murcia" />
            <img className="ministry-header-logo" src={assetUrl('Logotipo_del_Ministerio_de_Derechos_Sociales,_Consumo_y_Agenda_2030.svg')} alt="Ministerio de Derechos Sociales, Consumo y Agenda 2030" />
          </div>
          <AppLink href="/" className="brand" aria-label="Ir al inicio">
            <img className="brand-logo" src={assetUrl('Logo_Convenio.png')} alt="" />
            <span className="brand-copy"><strong>{project.shortName}</strong><small>{project.category}</small></span>
          </AppLink>
        </div>
        <button className="menu-button" type="button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
          {routes.map((item) => (
            <AppLink key={item.href} href={item.href} className={route === item.href || (item.href === '/actualidad' && route.startsWith('/actualidad/')) ? 'active' : ''}>{item.label}</AppLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img className="footer-logo" src={assetUrl('Logo_Convenio.png')} alt="" />
          <div><strong>{project.shortName}</strong><p>{project.title}</p></div>
        </div>
        <div className="footer-contact">
          <span>Contacto</span>
          <div className="footer-contact-links">
            <a href={project.contactCDLUrl}>{project.contactCDLLabel} ↗</a>
          </div>
        </div>
        <p className="legal">Proyecto desarrollado en convenio con {project.publicPartner}. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

function CurrentView({ route }: { route: Route }) {
  if (route === '/participantes') return <Participants />
  if (route === '/actualidad') return <News />
  if (route.startsWith('/actualidad/')) return <NewsDetail slug={route.slice('/actualidad/'.length)} />
  return <Home />
}

function App() {
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const onRouteChange = () => setRoute(getRoute())
    window.addEventListener('popstate', onRouteChange)
    return () => window.removeEventListener('popstate', onRouteChange)
  }, [])

  return (
    <>
      <Header key={route} route={route} />
      <CurrentView route={route} />
      <Footer />
    </>
  )
}

export default App
