# **Gerenciador de Produtos**

## **Descrição**
Este projeto é uma aplicação web para gerenciamento de produtos que permite aos usuários:
- **Registrar e fazer login** em contas pessoais.
- **Adicionar, editar e excluir produtos** associados às suas contas.
- **Persistir os dados** localmente usando o `localStorage` do navegador.

O design é responsivo e funcional, proporcionando uma experiência intuitiva tanto em desktops quanto em dispositivos móveis.

---

## **Funcionalidades**
1. **Gerenciamento de Usuários**:
   - Registro de novas contas.
   - Login para contas existentes.
   - Logout, garantindo a segurança do acesso.
2. **Gerenciamento de Produtos**:
   - Adicionar produtos com nome e preço.
   - Editar informações de produtos existentes.
   - Excluir produtos.
   - Visualizar produtos cadastrados em uma interface limpa e organizada.
3. **Persistência de Dados**:
   - Os dados dos usuários e produtos são salvos no `localStorage`, garantindo que persistam após recarregar a página.

---

## **Tecnologias Utilizadas**
- **HTML5**: Estrutura semântica das páginas.
- **CSS3**: Estilização responsiva e moderna, com uso de variáveis CSS.
- **JavaScript**: Lógica de negócio, manipulação do DOM e integração com o `localStorage`.

---

## **Como Executar o Projeto**
1. Faça o download ou clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-produtos.git
2. Abra o projeto em seu editor de código.

3. Inicie um servidor local para visualizar o projeto:
   - **Com o VSCode**: Use a extensão **Live Server**.
   - **Manualmente**: Abra o arquivo `index.html` em qualquer navegador.

4. Navegue pelas páginas:
   - **`index.html`**: Tela de login e cadastro.
   - **`listagem.html`**: Tela de listagem e gerenciamento de produtos.

## **Estrutura de Arquivos**
```bash
/
├── index.html        # Página inicial para login e cadastro
├── listagem.html     # Página de gerenciamento de produtos
├── style.css         # Estilo geral das telas
├── listagem.css      # Estilo específico da tela de listagem
├── script.js         # Lógica de autenticação e troca de telas
└── listagem.js       # Gerenciamento de produtos
```
## **Explicação dos Arquivos**

### **1. HTML**
- **`index.html`**:
  - Formulário de login.
  - Formulário de cadastro.
  - Integração com `script.js` para autenticação.
- **`listagem.html`**:
  - Formulário para adicionar produtos.
  - Lista de produtos cadastrados.
  - Botão de logout.

### **2. CSS**
- **`style.css`**:
  - Define a estilização geral.
  - Layout responsivo para telas de login/cadastro.
- **`listagem.css`**:
  - Estilo da página de gerenciamento de produtos.
  - Cartões de produtos, botões de ação e responsividade.

### **3. JavaScript**
- **`script.js`**:
  - Gerencia autenticação (registro, login e logout).
  - Troca de telas entre login/cadastro e gerenciamento.
- **`listagem.js`**:
  - Gerencia produtos (adicionar, editar, excluir e listar).
  - Salva e recupera dados do `localStorage`.

## **Fluxo de Funcionamento**

### **Página Inicial (`index.html`)**
- **Registro**: Criação de novas contas.
- **Login**: Usuários existentes podem acessar suas contas.

### **Página de Gerenciamento (`listagem.html`)**
- **Adicionar produtos**: Nome e preço.
- **Editar produtos**: Atualizar informações.
- **Excluir produtos**: Remover itens da lista.

### **Persistência de Dados**
- Credenciais e produtos são salvos no `localStorage`.

---

## **Possíveis Melhorias**
1. **Validação de Campos**:
   - Feedback mais claro para os usuários.
2. **API de Backend**:
   - Substituir `localStorage` por uma base de dados remota.
3. **Segurança Avançada**:
   - Hash de senhas para maior segurança.
   - Implementação de tokens JWT para autenticação.
4. **Melhorias de UI/UX**:
   - Adicionar transições suaves e microinterações.


