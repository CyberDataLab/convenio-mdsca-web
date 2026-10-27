const categoryClasses: Record<string, string> = {
  Convenio: 'category-convenio',
  Investigación: 'category-investigacion',
  Resultados: 'category-resultados',
}

export function getNewsCategoryClass(category: string) {
  return categoryClasses[category] ?? 'category-default'
}
