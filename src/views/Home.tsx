import { AppLink } from '../components/AppLink'
import { NewsCard } from '../components/NewsCard'
import { context, highlights, methodology, objectives, project, quickFacts } from '../content'
import { news } from '../noticias'
import { assetUrl } from '../assetUrl'

export function Home() {
  return (
    <main>
      <section className="hero-section">
        <img src={assetUrl('Logo_Convenio.jpg')} alt="Logotipo del convenio de innovación digital para la Administración Pública" />
        <div className="hero-shade" />
        <div className="hero-content container">
          <p className="eyebrow light">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="hero-summary">{project.subtitle}</p>
          <div className="hero-actions">
            <a className="button primary" href="#convenio">Conocer el convenio <span aria-hidden="true">→</span></a>
            <AppLink className="button secondary" href="/participantes">Ver participantes</AppLink>
            <AppLink className="button secondary" href="/actualidad">Ver noticias</AppLink>
          </div>
        </div>
        <div className="hero-meta" aria-label="Datos principales del convenio">
          <span><small>Duración</small>{project.period}</span>
          <span><small>Fecha de inicio</small>{"05.08.2026"}</span>
          <span><small>Ámbito</small>{project.scope}</span>
          <span><small>Financiación</small>{project.funding}</span>
        </div>
      </section>

      <section className="intro-section section" id="convenio">
        <div className="container split-intro">
          <div><p className="eyebrow">El convenio</p><h2>{project.shortName}</h2></div>
          <div className="prose">{project.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="facts-section section">
        <div className="container facts-layout">
          <div className="facts-heading"><p className="eyebrow">El convenio</p><h2>Datos básicos</h2></div>
          <dl className="facts-table">{quickFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </div>
      </section>

      <section className="highlights-section section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">El convenio</p><h2>Aspectos destacados</h2></div>
          <div className="highlight-grid">{highlights.map((item) => <article key={item.title}><span>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="context-section section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow light">El convenio</p><h2>Contexto</h2></div>
          <div className="context-grid">{context.map((item) => <article key={item.label}><p>{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="objectives-section section">
        <div className="container objectives-layout">
          <div className="section-heading"><p className="eyebrow">El convenio</p><h2>Objetivos</h2></div>
          <ol className="objective-list">{objectives.map((objective, index) => <li key={objective}><span>0{index + 1}</span><p>{objective}</p></li>)}</ol>
        </div>
      </section>

      <section className="progress-section section">
        <div className="container progress-grid">
          <div><p className="eyebrow light">El convenio</p><h2>Metodología</h2></div>
          <ol className="timeline">{methodology.map((item, index) => <li key={item.title}><span>{index + 1}</span><div><small>{item.date}</small><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="latest-section section">
        <div className="container">
          <div className="section-heading row"><div><p className="eyebrow">Actualidad</p><h2>Últimos avances</h2></div><AppLink href="/actualidad" className="text-link">Ver todas <span>→</span></AppLink></div>
          <div className="news-grid">{news.map((item) => <NewsCard item={item} key={item.title} />)}</div>
        </div>
      </section>
    </main>
  )
}
