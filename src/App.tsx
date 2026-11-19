
import { Routes, Route, Link, useParams } from 'react-router-dom'
import {
  MapPin,
  Lightbulb,
  Trash2,
  CloudRain,
  Construction,
  ArrowRight,
  Search,
  ShieldCheck,
  GraduationCap,
  Code2,
  UserRound,
} from 'lucide-react'
import RegistrarOcorrencia from './pages/RegistrarOcorrencia'
import './App.css'

type Ocorrencia = {
  id: number
  tipo: string
  local: string
  descricao: string
}

const ocorrencias: Ocorrencia[] = [
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
    <div className="min-h-screen">
      <header className="cabecalho">
        <Link to="/" className="marca">
          <MapPin size={27} />
          <span>CityNews</span>
        </Link>

        <nav aria-label="Menu principal">
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
        <p>Projeto acadêmico • Global Solution FIAP</p>
      </footer>
    </div>
  )
}

function Home() {
  const categorias = [
    {
      titulo: 'Buracos nas ruas',
      descricao: 'Ajude a identificar vias que precisam de manutenção.',
      Icone: Construction,
    },
    {
      titulo: 'Iluminação pública',
      descricao: 'Informe problemas de iluminação em ruas e praças.',
      Icone: Lightbulb,
    },
    {
      titulo: 'Descarte irregular',
      descricao: 'Registre pontos de descarte inadequado de resíduos.',
      Icone: Trash2,
    },
    {
      titulo: 'Alagamentos',
      descricao: 'Sinalize regiões afetadas pelo acúmulo de água.',
      Icone: CloudRain,
    },
  ]

  return (
    <Layout>
      <section className="hero-citynews hero-com-imagem">
        <div className="hero-conteudo">
          <span className="etiqueta">
            <MapPin size={15} />
            Tecnologia e cidadania
          </span>

          <h1>Sua cidade, sua voz.</h1>

          <p>
            Pequenas ações podem transformar grandes cidades.
            Identifique problemas urbanos, consulte endereços
            e participe da construção de uma comunidade melhor.
          </p>

          <div className="acoes-hero">
            <Link to="/registrar" className="botao">
              Registrar ocorrência <ArrowRight size={18} />
            </Link>

            <Link to="/ocorrencias" className="botao-secundario">
              Explorar ocorrências
            </Link>
          </div>
        </div>

        <div className="hero-imagem">
          <img
            src="/iluminacao-citynews.png"
            alt="Iluminação pública em uma cidade ao anoitecer, com marcador de ocorrência"
          />
        </div>
      </section>

      <section className="categorias-citynews">
        <div className="cabecalho-secao">
          <span className="subtitulo-secao">PARTICIPE</span>
          <h2>O que você pode registrar?</h2>
          <p>Conheça situações urbanas que merecem atenção.</p>
        </div>

        <div className="grade-categorias">
          {categorias.map(({ titulo, descricao, Icone }) => (
            <article className="categoria-card" key={titulo}>
              <div className="categoria-icone">
                <Icone size={27} strokeWidth={1.8} />
              </div>
              <h3>{titulo}</h3>
              <p>{descricao}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="chamada-final">
        <ShieldCheck size={34} />
        <h2>Uma cidade melhor começa com participação.</h2>
        <p>Conheça o projeto e explore suas funcionalidades.</p>
        <Link to="/sobre" className="botao">
          Conhecer o CityNews <ArrowRight size={18} />
        </Link>
      </section>
    </Layout>
  )
}

function Sobre() {
  return (
    <Layout>
      <section className="pagina-interna">
        <span className="subtitulo-secao">NOSSA PROPOSTA</span>
        <h1>Sobre o CityNews</h1>

        <p>
          O CityNews é uma proposta acadêmica de tecnologia cidadã
          criada para facilitar a identificação de problemas urbanos.
        </p>

        <p>
          A plataforma oferece consulta de endereços por CEP,
          formulários de ocorrência e navegação por categorias.
        </p>

        <p>
          Nosso objetivo é tornar a participação cidadã mais
          simples, acessível e organizada.
        </p>

        <p>
          Esta versão é um protótipo Front-End. O envio e o
          armazenamento de ocorrências dependem de uma API de cadastro.
        </p>

        <img
          src="/cidade-ocorrencia.png"
          alt="Cidadã fotografando um problema urbano"
          loading="lazy"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '850px',
            height: 'auto',
            margin: '32px auto 0',
            borderRadius: '18px',
          }}
        />
      </section>
    </Layout>
  )
}

function Integrantes() {
  return (
    <Layout>
      <section className="pagina-interna">
        <span className="subtitulo-secao">DESENVOLVIMENTO</span>
        <h1>Quem está por trás do CityNews?</h1>

        <p>
          Conheça a estudante responsável pelo desenvolvimento
          Front-End do projeto.
        </p>

        <article className="cartao integrante-card">
          <div className="avatar">AT</div>
          <h2>Alice Teixeira Caldeira</h2>

          <p>
            <UserRound size={17} className="inline-block" />
            {' '}RM 556293
          </p>

          <p>
            <GraduationCap size={17} className="inline-block" />
            {' '}Turma 1TDSPV — FIAP
          </p>

          <p>
            <Code2 size={17} className="inline-block" />
            {' '}Desenvolvimento Front-End
          </p>
        </article>
      </section>
    </Layout>
  )
}

function FAQ() {
  return (
    <Layout>
      <section className="pagina-interna">
        <span className="subtitulo-secao">DÚVIDAS</span>
        <h1>Perguntas frequentes</h1>

        <details>
          <summary>O que é o CityNews?</summary>
          <p>
            É um protótipo acadêmico voltado à participação
            cidadã e à identificação de problemas urbanos.
          </p>
        </details>

        <details>
          <summary>Como consultar um endereço?</summary>
          <p>
            Acesse Registrar ocorrência, digite um CEP
            e clique em Buscar endereço.
          </p>
        </details>

        <details>
          <summary>As ocorrências são enviadas à prefeitura?</summary>
          <p>
            Não. O CityNews ainda não possui integração
            com sistemas de atendimento público.
          </p>
        </details>

        <details>
          <summary>Os exemplos de ocorrências são reais?</summary>
          <p>
            Não. Os registros exibidos são ilustrativos
            e servem para demonstrar a interface.
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
        <span className="subtitulo-secao">FALE CONOSCO</span>
        <h1>Contato</h1>
        <p>Tem alguma sugestão sobre o CityNews?</p>

        <form
          onSubmit={(evento) => {
            evento.preventDefault()
            alert('Mensagem validada. O envio depende de uma API.')
          }}
        >
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            placeholder="Seu nome"
            minLength={3}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            required
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            rows={5}
            placeholder="Escreva sua mensagem..."
            required
          />

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
        <div className="titulo-com-icone">
          <Search size={29} />
          <h1>Ocorrências da cidade</h1>
        </div>

        <p>
          Explore registros ilustrativos para conhecer
          o funcionamento da plataforma.
        </p>

        <div className="grade-cartoes">
          {ocorrencias.map((item) => (
            <article className="cartao" key={item.id}>
              <span className="tag">Exemplo ilustrativo</span>
              <h2>{item.tipo}</h2>
              <p>
                <MapPin size={16} className="inline-block" />
                {' '}{item.local}
              </p>
              <Link to={`/ocorrencias/${item.id}`}>
                Ver detalhes{' '}
                <ArrowRight size={16} className="inline-block" />
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
            <span className="tag">Registro ilustrativo</span>
            <h1>{ocorrencia.tipo}</h1>
            <p><strong>Local:</strong> {ocorrencia.local}</p>
            <p>{ocorrencia.descricao}</p>
          </>
        ) : (
          <h1>Ocorrência não encontrada</h1>
        )}

        <Link to="/ocorrencias" className="link-acao">
          Voltar às ocorrências
        </Link>
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
      <Route
        path="*"
        element={
          <Layout>
            <section className="pagina-interna">
              <h1>Página não encontrada</h1>
              <Link to="/">Voltar ao início</Link>
            </section>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
