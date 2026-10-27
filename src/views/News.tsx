import { useState } from 'react'
import { NewsCard } from '../components/NewsCard'
import { PageHeader } from '../components/PageHeader'
import { news } from '../noticias'
import { getNewsCategoryClass } from '../newsVisual'

export function News() {
  const [filter, setFilter] = useState('Todas')
  const categories = ['Todas', ...new Set(news.map((item) => item.category))]
  const visibleNews = filter === 'Todas' ? news : news.filter((item) => item.category === filter)

  return (
    <main>
      <PageHeader
        eyebrow="Actualidad"
        title={<><span className="mobile-title-line">Últimas actualizaciones</span>{' '}<span className="mobile-title-line">sobre la investigación</span></>}
        text="Noticias, hitos y encuentros relacionados con el desarrollo del convenio."
      />
      <section className="section news-page-section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filtrar noticias">
            {categories.map((category) => (
              <button
                type="button"
                className={`${category === 'Todas' ? 'category-default' : getNewsCategoryClass(category)}${filter === category ? ' selected' : ''}`}
                onClick={() => setFilter(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="news-list">{visibleNews.map((item) => <NewsCard item={item} key={item.title} />)}</div>
        </div>
      </section>
    </main>
  )
}
