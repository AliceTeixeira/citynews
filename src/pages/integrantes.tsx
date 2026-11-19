
import { GraduationCap, Code2, UserRound } from 'lucide-react'

export default function Integrantes() {
  return (
    <section className="pagina-interna">
      <span className="subtitulo-secao">NOSSA EQUIPE</span>

      <h1>Quem está por trás do CityNews?</h1>

      <p>
        Conheça a estudante responsável pelo desenvolvimento
        Front-End da plataforma.
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

        <p>
          Projeto acadêmico Global Solution 2026 —
          CityNews, tecnologia e participação cidadã.
        </p>
      </article>
    </section>
  )
}
