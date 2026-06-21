import clientList from "../data/freelance.json";

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="client-card__external-icon">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
      />
    </svg>
  );
}

function FreelanceCard({ client, index }) {
  return (
    <article
      className="client-card reveal"
      style={{
        transitionDelay: `${index * 100}ms`,
        "--client-preview-bg": client.previewBg,
        "--client-preview-fg": client.previewFg,
        "--client-accent": client.accentColor,
      }}
    >
      <a
        href={client.url}
        className="client-card__preview"
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${client.name}`}
      >
        <div className="client-card__browser">
          <div className="client-card__browser-bar">
            <span className="client-card__browser-dot" />
            <span className="client-card__browser-dot" />
            <span className="client-card__browser-dot" />
            <span className="client-card__browser-url">{client.domain}</span>
          </div>
          <div className="client-card__browser-body">
            <div className="client-card__logo-wrap">
              <img
                src={client.logo}
                alt={client.logoAlt}
                className={`client-card__logo${client.logoWide ? " client-card__logo--wide" : ""}${client.logoInvert ? " client-card__logo--light" : ""}`}
              />
            </div>
            <span className="client-card__visit">
              Visit site
              <ExternalIcon />
            </span>
          </div>
        </div>
      </a>

      <div className="client-card__content">
        <div className="client-card__meta">
          <span className="client-card__role">{client.role}</span>
          <span className="client-card__year">{client.year}</span>
        </div>

        <h3 className="client-card__name">{client.name}</h3>
        <p className="client-card__location">{client.location}</p>
        <p className="client-card__desc">{client.description}</p>

        <div className="client-card__tags">
          {client.tech.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        <ul className="client-card__highlights">
          {client.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a
          href={client.url}
          className="client-card__link"
          target="_blank"
          rel="noreferrer"
        >
          {client.domain}
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}

function Freelance() {
  return (
    <section id="freelance" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Freelance</p>
          <h2 className="section-title">Client work</h2>
          <p className="section-subtitle">
            Work I've done outside my day job — whatever a client needed
            built.
          </p>
        </div>

        <div className="client-grid">
          {clientList.map((client, index) => (
            <FreelanceCard key={client.name} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Freelance;
