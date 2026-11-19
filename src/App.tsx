
import { Routes, Route, Link, useParams } from 'react-router-dom'
import RegistrarOcorrencia from './pages/RegistrarOcorrencia'
import './App.css'

const ocorrencias = [
  {
    id: 1,
    tipo: 'Iluminação pública',
    local: 'Praça das Palmeiras',
    descricao: 'Postes apagados durante a noite.',
  },
  {
    id: 2,
    tipo: 'Buraco na rua',
    local: 'Rua das Flores',
    descricao: 'Buraco dificultando a passagem de veículos.',
  },
  {
    id: 3,
    tipo: 'Descarte irregular de lixo',
    local: 'Avenida Central',
    descricao: 'Resíduos descartados na calçada.',
  },
]

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1 className="text-3xl font-extrabold">CityNews</h1>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/integrantes">Integrantes</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/ocorrencias">Ocorrências</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2026 CityNews — Sua cidade, sua voz.</p>
      </footer>
    </>
  )
}

function Home() {
  return (
    <Layout>
      <section>
        <h2>Sua cidade, sua voz.</h2>
        <p>
          O CityNews é uma plataforma de participação cidadã
          para identificar problemas urbanos e dar mais
          visibilidade às necessidades da comunidade.
        </p>
        <Link to="/registrar" className="botao">
          Registrar ocorrência
        </Link>
      </section>

      <section id="ocorrencias">
        <h2>O que você pode registrar?</h2>
        <ul>
          <li>Buracos nas ruas</li>
          <li>Problemas de iluminação pública</li>
          <li>Descarte irregular de lixo</li>
          <li>Alagamentos</li>
        </ul>
      </section>
    </Layout>
  )
}

function Sobre() {
  return (
    <Layout>
      <section className="pagina-interna">
        <h2>Sobre o CityNews</h2>
        <p>
          O CityNews nasceu como uma proposta acadêmica
          de tecnologia cidadã para aproximar moradores
          dos desafios encontrados nos espaços urbanos.
        </p>
        <p>
          A plataforma permite consultar endereços e
          preparar registros de ocorrências, incentivando
          a participação da população.
        </p>
        <p>
          Nosso objetivo é tornar a identificação de
          problemas urbanos mais simples e acessível.
        </p>
      </section>
    </Layout>
  )
}

function Integrantes() {
  return (
    <Layout>
      <section className="pagina-interna">
        <h2>Integrantes</h2>
        <p>Projeto desenvolvido para a Global Solution FIAP 2026.</p>
        <div className="cartao">
          <h3>Nome completo do integrante</h3>
          <p>RM: preencher</p>
          <p>Turma: preencher</p>
          <p>Responsável pelo desenvolvimento Front-End.</p>
        </div>
      </section>
    </Layout>
  )
}

function FAQ() {
  return (
    <Layout>
      <section className="pagina-interna">
        <h2>Perguntas frequentes</h2>

        <details>
          <summary>O que é o CityNews?</summary>
          <p>É um projeto acadêmico voltado à participação cidadã.</p>
        </details>

        <details>
          <summary>Como consultar um endereço?</summary>
          <p>
            Na página de registro, informe um CEP e clique
            em Buscar endereço.
          </p>
        </details>

        <details>
          <summary>As ocorrências são enviadas à prefeitura?</summary>
          <p>
            Não. Esta versão é um protótipo Front-End.
            O envio depende de uma API de cadastro.
          </p>
        </details>

        <details>
          <summary>Os exemplos de ocorrências são reais?</summary>
          <p>
            Não. Os exemplos exibidos são ilustrativos.
          </p>
        </details>
      </section>
    </Layout>
  )
}

function Contato() {
  return (
    <Layout>
      <section className="pagina-interna">
        <h2>Contato</h2>
        <p>Envie uma mensagem sobre o projeto CityNews.</p>

        <form
          onSubmit={(evento) => {
            evento.preventDefault()
            alert('Mensagem validada. O envio ainda não está disponível.')
          }}
        >
          <label htmlFor="nome">Nome</label>
          <input id="nome" required minLength={3} />

          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" required />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" rows={5} required />

          <button type="submit">Validar mensagem</button>
        </form>
      </section>
    </Layout>
  )
}

function ConsultarOcorrencias() {
  return (
    <Layout>
      <section className="pagina-interna">
        <h2>Ocorrências da cidade</h2>
        <p>
          Exemplos ilustrativos para demonstrar a navegação
          e a visualização de detalhes.
        </p>

        <div className="grade-cartoes">
          {ocorrencias.map((item) => (
            <article className="cartao" key={item.id}>
              <h3>{item.tipo}</h3>
              <p>{item.local}</p>
              <Link to={`/ocorrencias/${item.id}`}>
                Ver detalhes
              </Link>
            </article>
          ))}
        </div>

        <Link to="/registrar" className="link-acao">
          Registrar nova ocorrência
        </Link>
      </section>
    </Layout>
  )
}

function DetalhesOcorrencia() {
  const { id } = useParams()
  const ocorrencia = ocorrencias.find(
    (item) => item.id === Number(id)
  )

  return (
    <Layout>
      <section className="pagina-interna">
        {ocorrencia ? (
          <>
            <h2>{ocorrencia.tipo}</h2>
            <p><strong>Local:</strong> {ocorrencia.local}</p>
            <p>{ocorrencia.descricao}</p>
            <p>Registro ilustrativo para demonstração.</p>
          </>
        ) : (
          <h2>Ocorrência não encontrada</h2>
        )}

        <Link to="/ocorrencias">Voltar às ocorrências</Link>
      </section>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/registrar" element={<RegistrarOcorrencia />} />
      <Route path="/ocorrencias" element={<ConsultarOcorrencias />} />
      <Route path="/ocorrencias/:id" element={<DetalhesOcorrencia />} />
      <Route path="*" element={<Layout><h2>Página não encontrada</h2></Layout>} />
    </Routes>
  )
}

export default App
