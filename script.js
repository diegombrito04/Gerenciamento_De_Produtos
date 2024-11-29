document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const productForm = document.getElementById('product-form');
  const productList = document.getElementById('product-list');
  const loginSection = document.querySelector('.container'); // Tela de login/cadastro
  const productSection = document.getElementById('product-section'); // Tela de produtos
  const logoutLink = document.getElementById('logout-link'); // Link de logout

  let currentUser = null; // Usuário logado atualmente
  let userData = JSON.parse(localStorage.getItem('userData')) || {}; // Dados de todos os usuários

  // Função de registro
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (username && password) {
      if (!userData[username]) {
        userData[username] = { password };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Usuário cadastrado com sucesso!');
        registerForm.reset();
      } else {
        alert('Nome de usuário já existe. Escolha outro.');
      }
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  });

  // Função de login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
      if (userData[username] && userData[username].password === password) {
        localStorage.setItem('currentUser', username); // Salva o usuário logado
        window.location.href = 'listagem.html'; // Redireciona para a tela de listagem
      } else {
        alert('Usuário ou senha incorretos!');
      }
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  });
});

  // Função de login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
      if (userData[username] && userData[username].password === password) {
        currentUser = username;
        localStorage.setItem('currentUser', currentUser);
        loginSection.style.display = 'none'; // Esconde a tela de login
        productSection.style.display = 'block'; // Exibe a tela de produtos
        displayProducts(); // Mostra a lista de produtos
      } else {
        alert('Usuário ou senha incorretos!');
      }
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  });

  // Função de logout
  logoutLink.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    loginSection.style.display = 'flex'; // Mostra a tela de login
    productSection.style.display = 'none'; // Esconde a tela de produtos
  });

  // Função de cadastro de produto
  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value.trim();
    const price = document.getElementById('product-price').value.trim();

    if (name && price && currentUser) {
      const product = { id: Date.now(), name, price };
      userData[currentUser].products.push(product);
      localStorage.setItem('userData', JSON.stringify(userData));
      displayProducts();
      productForm.reset();
    }
  });

  // Função para exibir produtos
  function displayProducts() {
    productList.innerHTML = '';
    if (currentUser && userData[currentUser].products.length > 0) {
      userData[currentUser].products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${product.name} - R$${product.price}
          <button onclick="editProduct(${product.id})"><i class="fas fa-edit"></i> Editar</button>
          <button onclick="deleteProduct(${product.id})"><i class="fas fa-trash"></i> Excluir</button>
        `;
        productList.appendChild(li);
      });
    } else {
      productList.innerHTML = '<p>Nenhum produto cadastrado.</p>';
    }
  }

  // Função para excluir produto
  function deleteProduct(id) {
    userData[currentUser].products = userData[currentUser].products.filter(product => product.id !== id);
    localStorage.setItem('userData', JSON.stringify(userData));
    displayProducts();
  }

  // Função para editar produto
  function editProduct(id) {
    const product = userData[currentUser].products.find(p => p.id === id);
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    userData[currentUser].products = userData[currentUser].products.filter(p => p.id !== id);
    displayProducts();
  }

  // Torna funções de excluir/editar globais para o HTML
  window.deleteProduct = deleteProduct;
  window.editProduct = editProduct;

