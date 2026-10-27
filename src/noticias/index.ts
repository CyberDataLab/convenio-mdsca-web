import { presentacionLUCIA } from './presentacion LUCIA'
import type { NewsItem } from './types'

const allNews: NewsItem[] = [
  presentacionLUCIA
]

export const news = allNews.filter((item) => import.meta.env.DEV || item.published)
