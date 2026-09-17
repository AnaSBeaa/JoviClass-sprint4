# JoviClass 

O **JoviClass** é uma plataforma desenvolvida com o objetivo de auxiliar estudantes na organização da rotina acadêmica, apresentando uma solução voltada para facilitar o acompanhamento das atividades e necessidades do ambiente escolar.

Este projeto foi desenvolvido como parte de um projeto acadêmico.

## Deploy no Vercel

 **Link da aplicação:** 

## Funcionalidades

* Página inicial com apresentação do projeto;
* Seção explicando o problema identificado;
* Apresentação da solução proposta;
* Informações sobre o público-alvo;
* Galeria de imagens;
* Seção com informações sobre a equipe;
* Formulário de contato;
* Links para redes sociais;
* Menu de navegação responsivo;
* Menu hambúrguer para dispositivos móveis;
* Validação dos campos obrigatórios do formulário.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

* **React 19.2.8** — biblioteca utilizada para construção da interface;
* **React DOM 19.2.8** — integração do React com o DOM;
* **JavaScript** — linguagem utilizada no desenvolvimento da aplicação;
* **Tailwind CSS 4.3.3** — framework CSS utilizado para estilização;
* **Vite 8.3.0** — ferramenta utilizada para desenvolvimento e build do projeto;
* **ESLint 10.10.0** — ferramenta utilizada para análise e padronização do código;
* **HTML/JSX** — estruturação dos componentes da aplicação.

### Principais dependências

```json
{
  "@tailwindcss/vite": "^4.3.3",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "tailwindcss": "^4.3.3"
}
```

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* **Node.js**
* **npm**

Para verificar se as ferramentas estão instaladas, execute:

```bash
node --version
npm --version
```

## Como instalar as dependências

Após clonar ou baixar o projeto, abra o terminal na pasta raiz do projeto e execute:

```bash
npm install
```

Esse comando instala todas as dependências definidas no arquivo `package.json`.

## Como executar o projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Após iniciar o servidor, o Vite exibirá no terminal o endereço local para acessar a aplicação.

Normalmente, o projeto pode ser acessado em:

```text
http://localhost:5173
```

> A porta pode variar caso a porta padrão já esteja sendo utilizada por outro processo.

## Back-end / API utilizada

Este projeto **não possui back-end próprio**. Por isso, não há servidor adicional para executar — basta rodar `npm run dev` conforme a seção anterior.

O formulário de contato (seção "Contato" da página inicial) consome uma **API mockada** criada no [MockAPI](https://mockapi.io), que armazena as mensagens enviadas:

```text
https://6aaaebc1ff4dd5698b4f2a7a.mockapi.io/contatos
```

## Usuários e senha para teste

A aplicação possui autenticação simulada (mock), usada para liberar o acesso à rota privada `/dashboard` (Área do Aluno).

| Campo   | Valor                    |
| ------- | ------------------------ |
| E-mail  | `aluno@joviclass.com`    |
| Senha   | `joviclass123`           |

Para testar:

1. Clique em **"Área do aluno"** no menu de navegação;
2. Informe o e-mail e a senha acima na tela de login;
3. Você será redirecionado para o **Dashboard**, uma rota privada só acessível a usuários autenticados.

## Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela.

Entre os recursos responsivos estão:

* Menu de navegação adaptado para dispositivos móveis;
* Menu hambúrguer;
* Ajustes de espaçamento e posicionamento;
* Organização das seções para diferentes resoluções;
* Utilização das classes responsivas do Tailwind CSS.

## Uso de Ferramentas de IA

Este projeto contou com o auxílio de ferramentas de inteligência artificial como recurso de aprendizado e apoio técnico:

* **ChatGPT e Gemini** foram utilizados como recurso de aprendizado para a conversão de estilos CSS para Tailwind CSS.

Todo o código gerado ou sugerido pelas ferramentas de IA foi lido, compreendido, testado e validado manualmente pela equipe antes de ser incorporado ao projeto.

## Equipe

| Integrante  | RM |
| ----------- | ------ |
| Ana Beatriz | 569087 |
| Paloma      | 571460 |
| Yasmin      | 572363 |

---

**JoviClass — Projeto Acadêmico **