
# 🍽️ Receitas  Criativa


![Cópia de Cópia de Cópia de Cópia de Cópia de Animais](https://github.com/user-attachments/assets/442f7ff7-65fe-4f41-9032-0537098ce6af)

**Receitas Criativa** é uma plataforma dinâmica e intuitiva, desenvolvida com **React** e **Vite**, projetada para quem busca inspiração para suas próximas refeições. O aplicativo combina diversos componentes para proporcionar uma experiência de usuário fluida e envolvente.

## 🚀 Funcionalidades Principais

### 🥘 FoodBox
- **Descrição**: Exibe categorias alimentares de forma visualmente atraente.
- **Interação**: Passe o mouse sobre as categorias para obter informações adicionais e clique para explorar detalhes específicos.

### 🔍 Hero
- **Descrição**: Apresenta uma barra de pesquisa que permite aos usuários encontrar refeições específicas pelo nome.
- **Benefício**: Facilita a navegação e melhora a usabilidade ao permitir buscas rápidas.

### 🍲 MealBox
- **Descrição**: Mostra refeições individuais com uma visão geral rápida, incluindo imagens e nomes.
- **Interação**: Clique em uma refeição para obter detalhes completos sobre ela.

### 🌐 Navbar
- **Descrição**: Barra de navegação consistente com o logotipo do aplicativo.
- **Benefício**: Oferece um link para a página inicial e garante uma navegação intuitiva e fácil.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```plaintext
src/
  components/
    FoodBox/
      FoodBox.js
      FoodBox.css
    Hero/
      Hero.js
      Hero.css
    MealBox/
      MealBox.js
      MealBox.css
    Navbar/
      Navbar.js
      Navbar.css
  App.js
  main.js
  index.css
```

## ⚙️ Tecnologias Utilizadas

- **React**: Biblioteca para a construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para desenvolvimento de projetos JavaScript.

## 🏃 Como Começar

Para rodar o projeto localmente, siga estas etapas:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/receita-criativa.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd receitas-criativa
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).

## 🌐 Como Fazer o Deploy

Para fazer o deploy do seu projeto, você pode usar a [Vercel](https://vercel.com/), uma plataforma de deploy fácil e rápida. Aqui estão os passos para fazer o deploy na Vercel:

1. **Crie uma conta na Vercel** se ainda não tiver uma: [Vercel Signup](https://vercel.com/signup).

2. **Instale a CLI do Vercel** globalmente:

   ```bash
   npm install -g vercel
   ```

3. **Navegue até o diretório do projeto**:

   ```bash
   cd caminho/para/seu/projeto
   ```

4. **Faça login na Vercel** usando a CLI:

   ```bash
   vercel login
   ```

5. **Inicie o processo de deploy**:

   ```bash
   vercel
   ```

   - A CLI do Vercel irá guiá-lo por uma série de perguntas. Você pode aceitar as opções padrão para um deploy básico.

6. **Acesse o link fornecido** pela Vercel para visualizar seu projeto online.

Para um deploy contínuo, você pode conectar seu repositório GitHub, GitLab ou Bitbucket à Vercel. Assim, cada vez que você fizer um push para o seu repositório, o Vercel fará o deploy automaticamente.

## 📸 Capturas de Tela

Aqui estão algumas capturas de tela do aplicativo:

- **Página Inicial**
  ![Página Inicial](./assets/screenshots/home.png)

- **Detalhes da Refeição**
  ![Detalhes da Refeição](./assets/screenshots/meal-details.png)

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, por favor, siga estas etapas:

1. **Faça um fork do repositório.**
2. **Crie uma branch para sua modificação:**

   ```bash
   git checkout -b minha-nova-funcionalidade
   ```

3. **Faça suas mudanças e commit:**

   ```bash
   git add .
   git commit -m "Adiciona nova funcionalidade"
   ```

4. **Envie sua branch para o repositório remoto:**

   ```bash
   git push origin minha-nova-funcionalidade
   ```

5. **Crie um Pull Request no GitHub.**

## 📝 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Para mais informações, consulte a [documentação do React](https://reactjs.org/docs/getting-started.html) e a [documentação do Vite](https://vitejs.dev/guide/).
