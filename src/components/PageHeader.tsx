import type { ReactNode } from 'react'
import { assetUrl } from '../assetUrl'

type PageHeaderProps = {
  eyebrow: string
  title: ReactNode
  text: string
  className?: string
}

export function PageHeader({ eyebrow, title, text, className = '' }: PageHeaderProps) {
  return (
    <section className={`page-header ${className}`.trim()}>
      <img src={assetUrl('Logo_Convenio.jpg')} alt="" aria-hidden="true" />
      <div className="page-header-shade" />
      <div className="container">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
