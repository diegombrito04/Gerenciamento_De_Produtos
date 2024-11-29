document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const logoutButton = document.getElementById('logout');
  
    let products = JSON.parse(localStorage.getItem('products')) || [];
  
    // Exibe a lista de produtos
    function displayProducts() {
      productList.innerHTML = '';
      if (products.length > 0) {
        products.forEach((product, index) => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
            <div>
              <h3>${product.name}</h3>
              <p>R$ ${parseFloat(product.price).toFixed(2)}</p>
            </div>
            <div class="actions">
              <button class="edit" onclick="editProduct(${index})">Editar</button>
              <button class="delete" onclick="deleteProduct(${index})">Excluir</button>
            </div>
          `;
          productList.appendChild(productCard);
        });
      } else {
        productList.innerHTML = '<p>Nenhum produto cadastrado.</p>';
      }
    }
  
    // Adiciona um novo produto
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('product-name').value.trim();
      const price = document.getElementById('product-price').value.trim();
  
      if (name && price) {
        products.push({ name, price });
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        productForm.reset();
      } else {
        alert('Por favor, preencha todos os campos!');
      }
    });
  
    // Remove um produto
    window.deleteProduct = (index) => {
      products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(products));
      displayProducts();
    };
  
    // Edita um produto
    window.editProduct = (index) => {
      const product = products[index];
      document.getElementById('product-name').value = product.name;
      document.getElementById('product-price').value = product.price;
      products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(products));
      displayProducts();
    };
  
    // Função de logout
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html'; // Redireciona para a tela de login
    });
  
    displayProducts();
  });
  