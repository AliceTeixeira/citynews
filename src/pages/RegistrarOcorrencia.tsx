
import { useState } from 'react'
import { Link } from 'react-router-dom'

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

  function enviarFormulario(evento: React.SubmitEvent<HTMLFormElement>) {
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

    if (!endereco || endereco.cep.replace(/\D/g, '') !== cep.replace(/\D/g, '')) {
      setErro('Consulte um CEP válido antes de registrar.')
      return
    }

    setMensagem(
      'Formulário validado! O registro de ocorrências depende de uma API de cadastro.'
    )
  }

  return (
    <div>
      <header>
        <h1>CityNews</h1>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/registrar">Registrar ocorrência</Link>
        </nav>
      </header>

      <main>
        <section className="formulario">
          <h2>Registrar ocorrência</h2>

          <p>
            Ajude a identificar problemas urbanos da sua região.
          </p>

          <form onSubmit={enviarFormulario}>
            <label htmlFor="tipo">Tipo de problema</label>

            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="buraco">Buraco na rua</option>
              <option value="iluminacao">Iluminação pública</option>
              <option value="lixo">Descarte irregular de lixo</option>
              <option value="alagamento">Alagamento</option>
            </select>

            <label htmlFor="cep">CEP da ocorrência</label>

            <input
              id="cep"
              type="text"
              inputMode="numeric"
              placeholder="Ex.: 01310100"
              maxLength={9}
              value={cep}
              onChange={(e) => {
                setCep(e.target.value)
                setEndereco(null)
                setMensagem('')
              }}
              required
            />

            <button
              type="button"
              onClick={buscarCep}
              disabled={carregando}
            >
              {carregando ? 'Consultando...' : 'Buscar endereço'}
            </button>

            {endereco && (
              <div className="resultado-cep">
                <h3>Endereço encontrado</h3>
                <p><strong>Rua:</strong> {endereco.street || 'Não informada'}</p>
                <p><strong>Bairro:</strong> {endereco.neighborhood || 'Não informado'}</p>
                <p><strong>Cidade:</strong> {endereco.city}</p>
                <p><strong>Estado:</strong> {endereco.state}</p>
              </div>
            )}

            <label htmlFor="descricao">
              Descrição do problema
            </label>

            <textarea
              id="descricao"
              placeholder="Descreva o problema e informe um ponto de referência."
              rows={5}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              minLength={10}
              required
            />

            <button type="submit">
              Validar ocorrência
            </button>
          </form>

          {erro && (
            <p role="alert" style={{ color: '#b91c1c', marginTop: 20 }}>
              {erro}
            </p>
          )}

          {mensagem && (
            <p role="status" style={{ color: '#166534', marginTop: 20 }}>
              {mensagem}
            </p>
          )}
        </section>
      </main>

      <footer>
        <p>© 2026 CityNews — Sua cidade, sua voz.</p>
      </footer>
    </div>
  )
}

export default RegistrarOcorrencia
