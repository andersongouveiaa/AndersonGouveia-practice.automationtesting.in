# Desafio Técnico - E-commerce de Livros de Tecnologia (QualitersCLub)

Este repositório contém as entregas para o Desafio Técnico proposto pela "QualitersClub", com o objetivo de garantir a qualidade e confiabilidade de um **e-commerce de livros de tecnologia**, utilizando o site [https://practice.automationtesting.in](https://practice.automationtesting.in) como base de testes.

O desafio foi dividido em duas fases principais: Teste Manual (Planejamento) e Automação Web.

---

## 🚀 Fase 1: Teste Manual - Planejamento e Análise

Nesta fase, foi elaborado um Plano de Testes detalhado para as funcionalidades de registro e login do sistema. O objetivo foi identificar cenários, pré-condições, massa de teste, resultados esperados e planejar a futura automação.

### 1.1. Funcionalidades Analisadas e Validações

Foram levantadas validações para as seguintes funcionalidades críticas:

* **Registro de Usuário:**
    * Registro com sucesso (dados válidos).
    * Registro com email já existente.
    * Registro com campos vazios (validação de frontend).
* **Login de Usuário:**
    * Login com sucesso (credenciais válidas).
    * Login com credenciais inválidas.

### 1.2. Plano de Testes Detalhado

Todo o planejamento, incluindo os cenários de teste, massa de teste, pré e pós-condições, severidade e indicação para automação, está documentado na planilha:

* **`analise/AndersonGouveia-Plano de Teste.xlsx`**

    *(Nesta planilha, também há abas para Massa de Teste dedicada e possíveis Defeitos/Sugestões, caso tenham sido identificados durante a análise ou execução manual.)*

---

## 🤖 Fase 2: Automação Web com Cypress

Nesta fase, as principais funcionalidades de registro e login foram automatizadas utilizando o framework Cypress, seguindo boas práticas de desenvolvimento e padrões de design.

### 2.1. Tecnologias e Ferramentas Utilizadas

* **Framework de Testes End-to-End:** [Cypress](https://www.cypress.io/)
* **Linguagem de Programação:** JavaScript
* **Ambiente de Execução:** Node.js
* **Gerenciador de Pacotes:** npm
* **Padrão de Design:** Page Object Model (POM)


### 2.2. Como Configurar e Executar os Testes

Para rodar os testes de automação localmente, siga os passos abaixo:

1.  **Clone o Repositório:**
    Abra seu terminal/prompt de comando e navegue até o diretório onde deseja salvar o projeto.
    ```bash
    git clone [https://github.com/andersongouveiaa/AndersonGouveia-practice.automationtesting.in.git](https://github.com/andersongouveiaa/AndersonGouveia-practice.automationtesting.in.git)
    ```

2.  **Navegue até a Pasta de Automação:**
    Após clonar, entre no diretório principal do projeto e depois na pasta `automacao`.
    ```bash
    cd AndersonGouveia-practice.automationtesting.in
    cd automacao
    ```

3.  **Instale as Dependências:**
    Instale todas as bibliotecas e frameworks necessários (incluindo Cypress).
    ```bash
    npm install
    ```

4.  **Abra o Cypress Test Runner:**
    Este comando abrirá a interface gráfica do Cypress, onde você pode selecionar e executar os testes.
    ```bash
    npx cypress open
    ```
    * Na interface do Cypress, selecione **"E2E Testing"**.
    * Escolha o navegador de sua preferência (recomenda-se Chrome ou Electron).
    * Na lista de "specs" (arquivos de teste), clique em `registro.cy.js` ou `login.cy.js` (ou ambos) para executar os testes.

### 2.4. Cenários Automatizados

Os seguintes cenários de teste, conforme definidos no Plano de Testes (Fase 1), foram automatizados e estão passando com sucesso:

* **`registro.cy.js` - Funcionalidade de Registro:**
    * `CT_REG_001`: Registro de um novo usuário com sucesso (dados válidos).
    * `CT_REG_002`: Tentativa de registro com email já existente (validação de erro).
    * `CT_REG_003`: Tentativa de registro com campos vazios (validação de frontend - botão desabilitado no Electron).

* **`login.cy.js` - Funcionalidade de Login:**
    * `CT_LOG_001`: Login de usuário com sucesso (credenciais válidas).
    * `CT_LOG_002`: Tentativa de login com credenciais inválidas (validação de erro).

---

## ✨ Como me Destaquei (Autoavaliação)

* **Organização de Código:** Aplicação consistente do padrão Page Object Model (POM) para alta modularidade, reusabilidade e manutenibilidade dos testes.
* **Boas Práticas:** Utilização de nomes claros (em português, para facilitar a compreensão da equipe), separação de responsabilidades (Page Objects vs. Test Specs), e foco em asserções robustas.
* **Rastreabilidade:** Mapeamento claro entre os IDs dos cenários no Plano de Testes (Fase 1) e os blocos de teste automatizados (Fase 2).
* **Documentação:** Criação de um `README.md` detalhado com todas as informações necessárias para setup, execução e compreensão do projeto.

---

## 📚 Referências

* Site para testes: [https://practice.automationtesting.in](https://practice.automationtesting.in)
* Documentação oficial do Cypress: [https://docs.cypress.io/](https://docs.cypress.io/)
* Repositório de Portfólio (Inspiração): [https://github.com/pricaimiTech/sauceDemoQAPortfolio](https://github.com/pricaimiTech/sauceDemoQAPortfolio)
* Repositório de Curso Cypress (Inspiração): [https://github.com/pricaimiTech/todoMVC_cypress](https://github.com/pricaimiTech/todoMVC_cypress)
