import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { PageHeader } from '../components/PageHeader'
import { partners } from '../content'
import { assetUrl } from '../assetUrl'

function ScrollReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.18, rootMargin: '-6% 0px -8%' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={elementRef} className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

export function Participants() {
  return (
    <main>
      <PageHeader
        className="participants-page-header"
        eyebrow="El convenio"
        title="Entidades participantes"
        text="Dos instituciones aportan capacidades complementarias para investigar una aplicación responsable de la Inteligencia Artificial."
      />

      <section className="section participants-section">
        <div className="container">
          <div className="section-heading participants-heading">
            <p className="eyebrow">Entidades firmantes</p>
            <h2>¿Quién participa en el convenio?</h2>
            <p>Información sobre las instituciones que forman parte del acuerdo.</p>
          </div>
          <div className="people-list institution-list">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.name} className={index % 2 ? 'from-right' : 'from-left'}>
                <article className="person-row institution-row">
                  <div className={`participant-identity ${partner.tone}`}>
                    <span className="participant-number">0{index + 1}</span>
                    <div className="institution-logo">
                      <span aria-hidden="true">{partner.initials}</span>
                      <img src={assetUrl(partner.logo)} alt={partner.logoAlt} />
                    </div>
                  </div>
                  <div className="participant-copy institution-copy">
                    <p className="role">{partner.type}</p>
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                    <div className="institution-role"><strong>Su papel en el convenio</strong><p>{partner.role}</p></div>
                    <div className="institution-links">
                      <a href={partner.website} target="_blank" rel="noreferrer">Web oficial <span aria-hidden="true">↗</span></a>
                      {partner.contactUrl && partner.contactLabel && (
                        <a href={partner.contactUrl} target="_blank" rel="noreferrer">{partner.contactLabel} <span aria-hidden="true">↗</span></a>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
