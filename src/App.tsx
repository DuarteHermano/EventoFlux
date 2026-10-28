export default function App() {
  const hasLocalConfig = Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)

  return (
    <>
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
      <header className="site-header" id="inicio">
        <div className="header-inner">
          <a className="wordmark" href="#inicio" aria-label="EventoFlux — início">
            <span className="wordmark-symbol" aria-hidden="true">E<span>F</span></span>
            <span>EventoFlux</span>
          </a>
          <span className="demo-label">DEMO FICTÍCIA</span>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="content-width hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Uma base para operações de eventos</p>
              <h1 id="hero-title">EventoFlux<span className="title-dot">.</span></h1>
              <p className="hero-lead">Do planeamento de materiais à reconciliação final.</p>
              <p className="hero-detail">Esta primeira fase apresenta os percursos previstos. Os fluxos operacionais ainda não estão disponíveis.</p>
            </div>

            <nav className="path-nav" aria-label="Percursos">
              <a className="path-link" href="#gestor">
                <span className="path-index">01 / Gestor</span>
                <strong>Planear e acompanhar</strong>
                <span className="path-action">Conhecer o percurso <span aria-hidden="true">↗</span></span>
              </a>
              <a className="path-link" href="#operador">
                <span className="path-index">02 / Operador</span>
                <strong>Contar no posto</strong>
                <span className="path-action">Conhecer o percurso <span aria-hidden="true">↗</span></span>
              </a>
            </nav>
          </div>
        </section>

        <div className="content-width overview">
          <section className="role-section" id="gestor" aria-labelledby="gestor-title">
            <div className="role-heading">
              <p className="section-number">01 / Percurso previsto</p>
              <h2 id="gestor-title">Gestor</h2>
            </div>
            <div className="role-copy">
              <p>Organizar materiais, postos e eventos; depois acompanhar contagens, stock e custos num só fluxo.</p>
              <p className="future-note">O percurso completo chega em PRs seguintes. Não existem contas nem operações nesta fase.</p>
            </div>
          </section>

          <section className="role-section" id="operador" aria-labelledby="operador-title">
            <div className="role-heading">
              <p className="section-number">02 / Percurso previsto</p>
              <h2 id="operador-title">Operador</h2>
            </div>
            <div className="role-copy">
              <p>Aceder a um posto atribuído e registar contagens inicial e final num telemóvel.</p>
              <p className="future-note">O percurso completo chega em PRs seguintes. O acesso por PIN ainda não está ativo.</p>
            </div>
          </section>
        </div>

        <section className="setup-section" aria-labelledby="setup-title">
          <div className="content-width setup-inner">
            <div>
              <p className="section-number">Ambiente local</p>
              <h2 id="setup-title">Pronto para explorar o conceito.</h2>
            </div>
            <p className="setup-status" role="status">
              {hasLocalConfig ? (
                <>Configuração local detetada. Esta fase continua sem ligação a backend, autenticação ou dados operacionais.</>
              ) : (
                <><strong>Sem backend ligado.</strong> O shell funciona sem credenciais. O ficheiro <code>.env.example</code> documenta a configuração prevista para uma fase futura.</>
              )}
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-inner">
          <p>EventoFlux — conceito independente, sem dados reais.</p>
          <a href="#inicio">Voltar ao início</a>
        </div>
      </footer>
    </>
  )
}
