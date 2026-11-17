import { PageHeader } from '../components/PageHeader'
import { partners } from '../content'
import { assetUrl } from '../assetUrl'

export function Participants() {
  return (
    <main>
      <PageHeader
        className="participants-page-header"
        eyebrow="El convenio"
        title="Entidades participantes"
        text="Dos instituciones aportan capacidades complementarias para investigar una aplicación responsable de la Inteligencia Artificial."
      />

      <section className="section participants-section" aria-label="Entidades firmantes">
        <div className="container">
          <div className="institution-list">
            {partners.map((partner, index) => (
              <article key={partner.name} className="institution-card">
                <div className="institution-identity">
                  <span className="participant-number" aria-hidden="true">0{index + 1}</span>
                  <div className="institution-logo">
                    <img src={assetUrl(partner.logo)} alt={partner.logoAlt} />
                  </div>
                </div>
                <div className="participant-copy institution-copy">
                  <p className="role">{partner.type}</p>
                  <h2>{partner.name}</h2>
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
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
