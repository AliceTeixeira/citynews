
# CityNews — Sua cidade, sua voz

## Sobre o projeto

O CityNews é uma aplicação web desenvolvida para a Global Solution 2026 da FIAP, com o objetivo de incentivar a participação cidadã na identificação de problemas urbanos.

A plataforma permite que os usuários consultem ocorrências e preencham um formulário para relatar situações que afetam o cotidiano da cidade, como buracos nas ruas, problemas de iluminação pública, descarte irregular de lixo e alagamentos.

O projeto busca demonstrar como a tecnologia pode contribuir para cidades mais inteligentes, conectadas e participativas.

## Funcionalidades

- Página inicial com apresentação da plataforma.
- Visualização das categorias de problemas urbanos.
- Formulário de registro de ocorrências.
- Consulta de endereço por CEP utilizando a BrasilAPI.
- Validação dos campos obrigatórios do formulário.
- Consulta de ocorrências demonstrativas.
- Página de detalhes de ocorrência com rota dinâmica.
- Páginas institucionais: Sobre, Integrantes, FAQ e Contato.
- Layout responsivo para computadores, tablets e celulares.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- CSS
- React Router DOM
- Lucide React
- BrasilAPI

## Estrutura do projeto

```text
citynews/
├── public/
│   ├── cidade-ocorrencia.png
│   └── iluminacao-citynews.png
├── src/
│   ├── pages/
│   │   ├── RegistrarOcorrencia.tsx
│   │   └── RegistrarOcorrencia.css
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Páginas disponíveis

| Página | Rota |
|---|---|
| Início | `/` |
| Sobre | `/sobre` |
| Integrantes | `/integrantes` |
| FAQ | `/faq` |
| Contato | `/contato` |
| Registrar ocorrência | `/registrar` |
| Consultar ocorrências | `/ocorrencias` |
| Detalhes da ocorrência | `/ocorrencias/:id` |

## Como executar o projeto

### Pré-requisitos

É necessário ter o Node.js e o npm instalados.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/AliceTeixeira/citynews.git
```

Entre na pasta do projeto:

```bash
cd citynews
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo terminal.

No Windows, caso o PowerShell bloqueie o comando `npm`, utilize:

```bash
npm.cmd run dev
```

### Gerar a versão de produção

```bash
npm run build
```

## Integração com API

O formulário utiliza a BrasilAPI para consultar informações de endereço a partir de um CEP válido.

Endpoint utilizado:

```text
GET https://brasilapi.com.br/api/cep/v1/{cep}
```

A consulta retorna informações como rua, bairro, cidade e estado.

**Limitação atual:** o formulário realiza a validação dos dados, mas ainda não envia ou armazena ocorrências em uma API REST Java. As ocorrências exibidas na aplicação são demonstrativas.

## Responsividade

O CityNews foi desenvolvido com layout adaptável para diferentes tamanhos de tela.

Foram considerados os seguintes formatos:

- Celular: 390 × 844
- Tablet: 768 × 1024
- Computador: 1440 × 900

## Integrante

**Alice Teixeira Caldeira**

- RM: 556293
- Turma: 1TDSPV
- Instituição: FIAP
- Curso: Análise e Desenvolvimento de Sistemas

## Repositório

GitHub: https://github.com/AliceTeixeira/citynews

## Deploy

Link da aplicação publicada: a adicionar após a publicação na Vercel.

## Contexto acadêmico

Projeto desenvolvido para a Global Solution 2026 da FIAP, na disciplina de Front-End Design Engineering.
