const products = [];

function displayWelcomeMessage() {
  alert("BemVindo ao Cadatro de Produtos");
}

function displayMenu() {
  while (true) {
    const choice = prompt(
      "MENU:\n1. Novo Produto\n2. Apagar Produto\n3. Alterar Produto\n4. Listar Produto\n5. Organizar e Listar Produtos\n6. Sair do Programa\n\nPor Favor escolha uma Opção:"
    );

    switch (choice) {
      case "1":
        registerProduct();
        break;
      case "2":
        deleteProduct();
        break;
      case "3":
        editProduct();
        break;
      case "4":
        listProducts();
        break;
      case "5":
        sortAndDisplayProducts();
        break;
      case "6":
        alert("Programa terminado");
        return;
      default:
        alert("Opa, Opção Inválida, por favor tente novamente");
        break;
    }
  }
}

function registerProduct() {
  const brand = prompt("Qual a Marca do Produto?");
  const name = prompt("Qual o Nome do Produto?");
  const value = parseFloat(prompt("Qual o Preço do Produto?"));

  if (nameAlreadyExists(name)) {
    alert(
      "Opa, um Produto com esse Nome já existse, por favor tente novamente"
    );
    return;
  }

  if (value <= 0 || isNaN(value)) {
    alert("Opa, valor Inválido, por favor tente novamente");
    return;
  }

  const product = { brand, name, value };
  products.push(product);
  alert("Produto Cadastrado com Sucesso");
}

function nameAlreadyExists(name) {
  return products.some((product) => product.name === name);
}

function deleteProduct() {
  const nameToDelete = prompt("Qual Produto deseja apagar?");

  const index = products.findIndex((product) => product.name === nameToDelete);
  if (index === -1) {
    alert("Opa, Produto não encontrado, por favor tente novamente");
    return;
  }

  products.splice(index, 1);
  alert("Produto apagado com Sucesso");
}

function editProduct() {
  const nameToEdit = prompt("Qual Produto deseja alterar?");

  const index = products.findIndex((product) => product.name === nameToEdit);
  if (index === -1) {
    alert("Opa, Produto não encontrado, por favor tente novamente");
    return;
  }

  const newValue = parseFloat(prompt("Qual o novo Preço do Produto?"));

  if (newValue <= 0 || isNaN(newValue)) {
    alert("Opa, valor Inválido, por favor tente novamente");
    return;
  }

  products[index].value = newValue;
  alert("Produto alterado com Sucesso");
}

function listProducts() {
  let productList = "\nPRODUCT LIST:\n";
  products.forEach((product) => {
    productList += `Brand: ${product.brand}, Name: ${product.name}, Value: ${product.value}\n`;
  });
  alert(productList);
}

function sortAndDisplayProducts() {
  const sortedProducts = [...products].sort((a, b) => a.value - b.value);
  let productList = "\nSORTED PRODUCT LIST:\n";
  sortedProducts.forEach((product) => {
    productList += `Brand: ${product.brand}, Name: ${product.name}, Value: ${product.value}\n`;
  });
  alert(productList);
}

displayWelcomeMessage();
displayMenu();