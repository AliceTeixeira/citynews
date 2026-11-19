
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowLeft,
  Search,
  ClipboardList,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import './RegistrarOcorrencia.css'

type Endereco = {
  cep: string
  street: string
  neighborhood: string
  city: string
  state: string
}

function RegistrarOcorrencia() {
  const [tipo, setTipo] = useState('')
  const [cep, setCep] = useState('')
  const [descricao, setDescricao] = useState('')
  const [endereco, setEndereco] = useState<Endereco | null>(null)
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  async function buscarCep() {
    const cepLimpo = cep.replace(/\D/g, '')

    setMensagem('')
    setErro('')
    setEndereco(null)

    if (cepLimpo.length !== 8) {
      setErro('Digite um CEP válido com 8 números.')
      return
    }

    setCarregando(true)

    try {
      const resposta = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cepLimpo}`
      )

      if (!resposta.ok) {
        throw new Error('CEP não encontrado.')
      }

      const dados: Endereco = await resposta.json()

      setEndereco(dados)
      setMensagem('Endereço encontrado com sucesso!')
    } catch {
      setErro('Não foi possível consultar o CEP. Tente novamente.')
    } finally {
      setCarregando(false)
    }
  }

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setErro('')
    setMensagem('')

    if (!tipo || !descricao.trim()) {
      setErro('Preencha todos os campos obrigatórios.')
      return
    }

    if (descricao.trim().length < 10) {
      setErro('A descrição deve ter pelo menos 10 caracteres.')
      return
    }

    if (
      !endereco ||
      endereco.cep.replace(/\D/g, '') !== cep.replace(/\D/g, '')
    ) {
      setErro('Consulte um CEP válido antes de registrar.')
      return
    }

    setMensagem(
      'Formulário validado com sucesso! O envio da ocorrência depende da integração com uma API de cadastro.'
    )
  }

  return (
    <div className="registro-pagina">
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

      <main className="registro-main">
        <section className="registro-container">
          <Link to="/" className="registro-voltar">
            <ArrowLeft size={17} />
            Voltar ao início
          </Link>

          <div className="registro-cabecalho">
            <div className="registro-icone">
              <ClipboardList size={29} />
            </div>

            <span className="subtitulo-secao">
              PARTICIPAÇÃO CIDADÃ
            </span>

            <h1>Registrar ocorrência</h1>

            <p>
              Encontrou algum problema na sua cidade?
              Preencha o formulário para demonstrar
              como funciona o registro de ocorrências.
            </p>
          </div>

          <form
            className="registro-formulario"
            onSubmit={enviarFormulario}
          >
            <div className="registro-campo">
              <label htmlFor="tipo">
                Tipo de problema *
              </label>

              <select
                id="tipo"
                value={tipo}
                onChange={(evento) => setTipo(evento.target.value)}
                required
              >
                <option value="">Selecione uma opção</option>
                <option value="buraco">Buraco na rua</option>
                <option value="iluminacao">Iluminação pública</option>
                <option value="lixo">Descarte irregular de lixo</option>
                <option value="alagamento">Alagamento</option>
              </select>
            </div>

            <div className="registro-campo">
              <label htmlFor="cep">
                CEP da ocorrência *
              </label>

              <div className="registro-cep-linha">
                <input
                  id="cep"
                  type="text"
                  inputMode="numeric"
                  placeholder="Ex.: 01310100"
                  maxLength={9}
                  value={cep}
                  onChange={(evento) => {
                    setCep(evento.target.value)
                    setEndereco(null)
                    setMensagem('')
                    setErro('')
                  }}
                  required
                />

                <button
                  type="button"
                  className="registro-botao-cep"
                  onClick={buscarCep}
                  disabled={carregando}
                >
                  <Search size={17} />
                  {carregando ? 'Consultando...' : 'Buscar endereço'}
                </button>
              </div>

              <span className="registro-ajuda">
                Digite os 8 números do CEP para consultar o endereço.
              </span>
            </div>

            {endereco && (
              <div className="registro-endereco">
                <div className="registro-endereco-titulo">
                  <MapPin size={20} />
                  <h3>Endereço encontrado</h3>
                </div>

                <p>
                  <strong>Rua:</strong>{' '}
                  {endereco.street || 'Não informada'}
                </p>

                <p>
                  <strong>Bairro:</strong>{' '}
                  {endereco.neighborhood || 'Não informado'}
                </p>

                <p>
                  <strong>Cidade:</strong> {endereco.city}
                </p>

                <p>
                  <strong>Estado:</strong> {endereco.state}
                </p>
              </div>
            )}

            <div className="registro-campo">
              <label htmlFor="descricao">
                Descrição do problema *
              </label>

              <textarea
                id="descricao"
                placeholder="Descreva o problema encontrado e informe um ponto de referência."
                rows={5}
                value={descricao}
                onChange={(evento) =>
                  setDescricao(evento.target.value)
                }
                minLength={10}
                required
              />

              <span className="registro-ajuda">
                Informe pelo menos 10 caracteres.
              </span>
            </div>

            {erro && (
              <div
                className="registro-alerta registro-erro"
                role="alert"
              >
                <AlertCircle size={20} />
                <span>{erro}</span>
              </div>
            )}

            {mensagem && (
              <div
                className="registro-alerta registro-sucesso"
                role="status"
              >
                <CheckCircle2 size={20} />
                <span>{mensagem}</span>
              </div>
            )}

            <button
              type="submit"
              className="registro-botao-enviar"
            >
              <CheckCircle2 size={20} />
              Validar ocorrência
            </button>

            <p className="registro-observacao">
              Este formulário demonstra a validação dos dados.
              As ocorrências ainda não são enviadas ou armazenadas.
            </p>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 CityNews — Sua cidade, sua voz.</p>
        <p>Projeto acadêmico • Global Solution FIAP</p>
      </footer>
    </div>
  )
}

export default RegistrarOcorrencia
