import { presentacionLUCIA } from './presentacion LUCIA'
import type { NewsItem } from './types'

const allNews: NewsItem[] = [
  presentacionLUCIA
]

export const publishedNews = allNews.filter((item) => item.published)
export const hasPublishedNews = publishedNews.length > 0

// Los borradores solo se pueden previsualizar por su URL en desarrollo.
export const news = import.meta.env.DEV ? allNews : publishedNews
