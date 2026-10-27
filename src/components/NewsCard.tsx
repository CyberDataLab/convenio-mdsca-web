import { getNewsCategoryClass } from '../newsVisual'
import type { NewsItem } from '../noticias/types'
import { AppLink } from './AppLink'

type NewsCardProps = {
  item: NewsItem
}

export function NewsCard({ item }: NewsCardProps) {
  const categoryClass = getNewsCategoryClass(item.category)

  return (
    <article className={`news-card ${categoryClass}`}>
      <AppLink href={`/actualidad/${item.slug}`} className="news-card-link" aria-label={`Leer: ${item.title}`}>
        <div className="news-visual" aria-hidden="true">
          <span>{item.category}</span>
        </div>
        <div className="news-body">
          <p className="news-meta"><span className="news-category">{item.category}</span><span aria-hidden="true">·</span>{item.date}</p>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <span className="news-action">Leer noticia <i aria-hidden="true">→</i></span>
        </div>
      </AppLink>
    </article>
  )
}
