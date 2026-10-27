export type NewsImage = {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export type NewsList = {
  type: 'list'
  ordered?: boolean
  items: Array<{
    label: string
    text: string
  }>
}

export type NewsItem = {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  published: boolean
  content: Array<string | NewsImage | NewsList>
}
