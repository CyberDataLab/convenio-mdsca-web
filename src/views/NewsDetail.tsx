import { useEffect, useState } from 'react'
import { AppLink } from '../components/AppLink'
import { NewsCard } from '../components/NewsCard'
import { project } from '../content'
import { news } from '../noticias'
import type { NewsImage } from '../noticias/types'
import { getNewsCategoryClass } from '../newsVisual'
import { assetUrl } from '../assetUrl'

type NewsDetailProps = {
  slug: string
}

export function NewsDetail({ slug }: NewsDetailProps) {
  const [activeImage, setActiveImage] = useState<NewsImage | null>(null)
  const article = news.find((item) => item.slug === slug)

  useEffect(() => {
    if (!activeImage) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeImage])

  if (!article) {
    return (
      <main className="article-not-found">
        <div className="container">
          <p className="eyebrow">Actualidad</p>
          <h1>Esta noticia no está disponible</h1>
          <p>Es posible que la dirección haya cambiado o que el contenido todavía no se haya publicado.</p>
          <AppLink href="/actualidad" className="button article-button"><span aria-hidden="true">←</span> Volver a Actualidad</AppLink>
        </div>
      </main>
    )
  }

  const related = news.filter((item) => item.slug !== article.slug).slice(0, 2)
  const categoryClass = getNewsCategoryClass(article.category)

  return (
    <main>
      <article className={categoryClass}>
        <header className="article-header">
          <div className="container">
            <AppLink href="/actualidad" className="article-back"><span aria-hidden="true">←</span> Actualidad</AppLink>
            <p className="article-meta"><span className="news-category">{article.category}</span><span aria-hidden="true">·</span>{article.date}</p>
            <h1>{article.title}</h1>
            <p className="article-lead">{article.excerpt}</p>
          </div>
        </header>

        <hr className="article-divider" />

        <section className="article-content-section section">
          <div className="container article-layout">
            <div className="article-copy">
              {article.content.map((block, index) => {
                if (typeof block === 'string') return <p key={`${index}-${block}`}>{block}</p>

                if (block.type === 'image') {
                  return (
                    <figure className="article-image" key={`${index}-${block.src}`}>
                      <button className="article-image-trigger" type="button" onClick={() => setActiveImage(block)} aria-label={`Ampliar imagen: ${block.alt}`}>
                        <img src={assetUrl(block.src)} alt={block.alt} loading="lazy" />
                      </button>
                      {block.caption && <figcaption>{block.caption}</figcaption>}
                    </figure>
                  )
                }

                const List = block.ordered ? 'ol' : 'ul'
                return (
                  <List className="article-list" key={`list-${index}`}>
                    {block.items.map((item) => (
                      <li key={item.label}><strong>{item.label}</strong><span>{item.text}</span></li>
                    ))}
                  </List>
                )
              })}
            </div>
            <aside className="article-aside">
              <div><span>Publicado</span><strong>{article.date}</strong></div>
              <div><span>Categoría</span><strong>{article.category}</strong></div>
              <div><span>Convenio</span><strong>{project.shortName}</strong></div>
              <AppLink href="/actualidad" className="article-return">Volver a Actualidad <span aria-hidden="true">→</span></AppLink>
            </aside>
          </div>
        </section>
      </article>

      <section className="related-section section">
        <div className="container">
          <div className="section-heading row"><div><p className="eyebrow">Sigue leyendo</p><h2>Noticias relacionadas</h2></div><AppLink href="/actualidad" className="text-link">Ver todas <span>→</span></AppLink></div>
          <div className="related-grid">{related.map((item) => <NewsCard key={item.slug} item={item} />)}</div>
        </div>
      </section>

      {activeImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null)
          }}
        >
          <button className="image-lightbox-close" type="button" aria-label="Cerrar imagen" onClick={() => setActiveImage(null)} autoFocus>×</button>
          <figure className="image-lightbox-content">
            <img src={assetUrl(activeImage.src)} alt={activeImage.alt} />
            {activeImage.caption && <figcaption>{activeImage.caption}</figcaption>}
          </figure>
        </div>
      )}
    </main>
  )
}
