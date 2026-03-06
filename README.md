# Automação de Testes — Contato Seguro

Projeto de automação desenvolvido em Cypress cobrindo testes de **API** e **E2E (UI)** do sistema CRUD de usuários e empresas.

---

## Pré-requisitos

- [Node.js v20.15.1](https://nodejs.org/en/download) instalado
- **Windows 10/11:** [Docker Desktop para Windows](https://docs.docker.com/desktop/install/windows-install/)
- **Linux:** [Docker Engine + Docker Compose](https://docs.docker.com/engine/install/)

---

## 1. Subir o ambiente da aplicação

Na raiz do projeto da aplicação (onde está o `docker-compose.yml`):

**Windows — PowerShell ou Prompt de Comando:**
```powershell
docker-compose up --build -d
```

**Linux — Terminal:**
```bash
docker compose up --build -d
```

> O build inicial pode levar alguns minutos.

Após subir, os serviços estarão disponíveis em:

| Serviço  | URL                   |
|----------|-----------------------|
| Frontend | http://localhost:5400 |
| API      | http://localhost:8400 |
| MySQL    | localhost:3400        |

---

## 2. Configurar o projeto de automação

Certifique-se de que a raiz do projeto de automação contém os seguintes arquivos:

```
cypress.config.js
package.json
cypress/
```

O `cypress.config.js` já aponta para os serviços locais:

```js
baseUrl: 'http://localhost:5400' 
apiUrl:  'http://localhost:8400'   
```

Nenhuma alteração é necessária caso os serviços estejam rodando nas portas padrão.

---

## 3. Instalar as dependências

**Windows — PowerShell:**
```powershell
npm install
```

**Linux — Terminal:**
```bash
npm install
```

Isso instalará o Cypress 15.11.0 e todas as dependências listadas no `package.json`.

---

## 4. Rodar os testes

### Todos os testes de uma vez (modo headless — recomendado)

**Windows:**
```powershell
npx cypress run
```

**Linux:**
```bash
npx cypress run
```

### Interface gráfica (modo visual)

**Windows:**
```powershell
npx cypress open
```

**Linux:**
```bash
npx cypress open
```

> Na interface, selecione **E2E Testing**, escolha o browser e clique em **Run all specs**.

> **Linux:** caso o `npx cypress open` não abra a interface, instale as dependências gráficas necessárias:
> ```bash
> sudo apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
> ```

---

## 5. Estrutura dos testes

```
cypress/
├── e2e/
│   ├── api/                  # Testes de API — Usuário
│   │   ├── createUserAPI.cy.js
│   │   ├── getUserAPI.cy.js
│   │   ├── updateUserAPI.cy.js
│   │   ├── deleteUserAPI.cy.js
│   │   └── homeUserAPI.cy.js
│   ├── companyApi/           # Testes de API — Empresa
│   │   ├── createCompanyAPI.cy.js
│   │   ├── getCompanyAPI.cy.js
│   │   ├── updateCompanyAPI.cy.js
│   │   └── deleteCompanyAPI.cy.js
│   └── ui/                   # Testes E2E — Interface
│       └── frontUserUI.cy.js
└── support/
    ├── commands.api.js       # Custom commands de API
    ├── commands.ui.js        # Custom commands de UI
    └── e2e.js                # Importação dos commands
```

---

## 6. Resultados esperados

A suíte possui **37 testes** no total.

| Status      | Quantidade | Motivo                             |
|-------------|------------|------------------------------------|
| ✅ Passando | 27         | Comportamento correto da aplicação |
| ❌ Falhando | 10         | Bugs identificados e documentados  |

> Consulte o **Relatório de Bugs** para detalhes.

## 7. Versões utilizadas

| Ferramenta | Versão   |
|------------|----------|
| Node.js    | v20.15.1 |
| npm        | v10.7.0  |
| Cypress    | 15.11.0  |
| Electron   | 138      |
