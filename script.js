
const products = [
    // Arroz
    { id: 1, name: "Arroz", image: "https://ibassets.com.br/ib.item.image.large/l-2ba0fe8cf1b04d59a8a9cbc30ff1c1db.png", prices: [
        { market: "Beltrame", price: 10.5, brand: "Marca 1" },
        { market: "Rede Super", price: 11.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 12.0, brand: "Marca 3" }
    ] },
    // Feijão
    { id: 2, name: "Feijão", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTX9WX1Hsiwc8mSzF_5n3B2OMXbiod8GfFRA&s", prices: [
        { market: "Beltrame", price: 8.9, brand: "Marca 1" },
        { market: "Rede Super", price: 9.5, brand: "Marca 2" },
        { market: "Rede Vivo", price: 10.0, brand: "Marca 3" }
    ] },
    // Leite
    { id: 3, name: "Leite", image: "https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/848x1007px-uht-integral-frontal-esquerda-461.webp", prices: [
        { market: "Beltrame", price: 5.7, brand: "Marca 1" },
        { market: "Rede Super", price: 6.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 6.5, brand: "Marca 3" }
    ] },
    // Óleo
    { id: 4, name: "Óleo", image: "https://static.paodeacucar.com/img/uploads/1/281/565281.png", prices: [
        { market: "Beltrame", price: 6.3, brand: "Marca 1" },
        { market: "Rede Super", price: 6.7, brand: "Marca 2" },
        { market: "Rede Vivo", price: 7.0, brand: "Marca 3" }
    ] },

    { id: 5, name: "Açúcar", image: "https://superprix.vteximg.com.br/arquivos/ids/174589-600-600/Acucar-Cristal-Uniao-Cristalcucar-1kg.png?v=636213802015630000", prices: [
        { market: "Beltrame", price: 3.5, brand: "Marca 1" },
        { market: "Rede Super", price: 3.8, brand: "Marca 2" },
        { market: "Rede Vivo", price: 4.0, brand: "Marca 3" }
    ] },
    { id: 6, name: "Farinha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OQ2hQmbGqW77SKlBhrx0EKUh84uf998_hA&s", prices: [
        { market: "Beltrame", price: 2.5, brand: "Marca 1" },
        { market: "Rede Super", price: 2.7, brand: "Marca 2" },
        { market: "Rede Vivo", price: 3.0, brand: "Marca 3" }
    ] },
    { id: 7, name: "Macarrão", image: "https://giassi.vtexassets.com/arquivos/ids/1158478/Macarrao-de-Semola-com-Ovos-Penne-Renata-Pacote-500g.png?v=638509726134830000", prices: [
        { market: "Beltrame", price: 4.5, brand: "Marca 1" },
        { market: "Rede Super", price: 4.8, brand: "Marca 2" },
        { market: "Rede Vivo", price: 5.0, brand: "Marca 3" }
    ] },
    { id: 8, name: "Café", image: "https://coffeemais.com/cdn/shop/files/GRAOS_ALTOCAPARO_SITE.png?v=1700250795", prices: [
        { market: "Beltrame", price: 7.5, brand: "Marca 1" },
        { market: "Rede Super", price: 8.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 8.5, brand: "Marca 3" }
    ] },
    { id: 9, name: "Sal", image: "https://www.clubeextra.com.br/img/uploads/1/276/659276.png", prices: [
        { market: "Beltrame", price: 2.0, brand: "Marca 1" },
        { market: "Rede Super", price: 2.2, brand: "Marca 2" },
        { market: "Rede Vivo", price: 2.5, brand: "Marca 3" }
    ] },
    { id: 10, name: "Frango", image: "https://www.auroraalimentos.com.br/wp-content/uploads/2022/04/frango-inteiro.png", prices: [
        { market: "Beltrame", price: 12.5, brand: "Marca 1" },
        { market: "Rede Super", price: 13.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 13.5, brand: "Marca 3" }
    ] },
    { id: 11, name: "Carne", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD4n65-R3Fnupw0bTfJC0-5Egvia8CJeNMw&s", prices: [
        { market: "Beltrame", price: 25.0, brand: "Marca 1" },
        { market: "Rede Super", price: 26.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 27.0, brand: "Marca 3" }
    ] },
    { id: 12, name: "Queijo", image: "https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/848x1007px_mockup_prato_500g-606.webp", prices: [
        { market: "Beltrame", price: 15.5, brand: "Marca 1" },
        { market: "Rede Super", price: 16.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 17.0, brand: "Marca 3" }
    ] },
    { id: 13, name: "Presunto", image: "https://www.frimesa.com.br/upload/image/subproduct/presunto-fatiado-500g1-103-53.png", prices: [
        { market: "Beltrame", price: 8.5, brand: "Marca 1" },
        { market: "Rede Super", price: 9.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 9.5, brand: "Marca 3" }
    ] },
    { id: 14, name: "Peixe", image: "https://superprix.vteximg.com.br/arquivos/ids/169981-600-600/Peixe-Frescatto-File-de-Tilapia-Congelado-500g.jpg?v=636094537240870000", prices: [
        { market: "Beltrame", price: 22.0, brand: "Marca 1" },
        { market: "Rede Super", price: 23.0, brand: "Marca 2" },
        { market: "Rede Vivo", price: 24.0, brand: "Marca 3" }
    ] },
    { id: 15, name: "Batata", image: "https://superprix.vteximg.com.br/arquivos/ids/178620-292-292/Batata-Especial-1kg.png?v=636857520320030000", prices: [
        { market: "Beltrame", price: 5.0, brand: "Marca 1" },
        { market: "Rede Super", price: 5.5, brand: "Marca 2" },
        { market: "Rede Vivo", price: 6.0, brand: "Marca 3" }
    ] }
];

const markets = ["Beltrame", "Rede Super", "Rede Vivo"];

let cart = [];

// Manipulação de abas
document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
        document.getElementById(button.dataset.tab).classList.remove("hidden");
    });
});

// Preencher produtos com preços por mercado e imagens
const productList = document.getElementById("product-list");
const marketList = document.getElementById("market-list");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

function renderProducts(filter = "") {
    productList.innerHTML = "";
    products
        .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(product => {
            const productItem = document.createElement("div");
            const priceList = product.prices.map(price => {
                return `
                    <li>
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        ${product.name} - ${price.market}: R$ ${price.price.toFixed(2)}
                        <button onclick="addToCart(${product.id}, '${price.market}', ${price.price})">Adicionar ao Carrinho</button>
                    </li>
                `;
            }).join("");
            productItem.innerHTML = `<ul>${priceList}</ul>`;
            productList.appendChild(productItem);
        });
}

// Preencher mercados com produtos e imagens
function renderMarkets() {
    markets.forEach(market => {
        const li = document.createElement("li");
        li.textContent = market;
        li.addEventListener("click", () => toggleDropdown(market));
        li.classList.add("market-item");
        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown-content");
        dropdown.id = `dropdown-${market}`;
        const marketProducts = products.filter(p => p.prices.some(pr => pr.market === market));
        marketProducts.forEach(product => {
            product.prices.filter(p => p.market === market).forEach(price => {
                const dropdownItem = document.createElement("div");
                dropdownItem.classList.add("dropdown-item");
                dropdownItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    ${product.name} - R$ ${price.price.toFixed(2)} 
                    <button onclick="addToCart(${product.id}, '${price.market}', ${price.price})">Adicionar</button>`;
                dropdown.appendChild(dropdownItem);
            });
        });
        li.appendChild(dropdown);
        marketList.appendChild(li);
    });
}

function toggleDropdown(market) {
    const dropdown = document.getElementById(`dropdown-${market}`);
    dropdown.classList.toggle("active");
}

// Adicionar item ao carrinho
function addToCart(productId, market, price) {
    const product = products.find(p => p.id === productId);
    const cartItem = { ...product, market, price };
    cart.push(cartItem);
    updateCart();
}

// Atualizar carrinho
function updateCart() {
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.market}: R$ ${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Limpar carrinho
function clearCart() {
    cart = [];
    updateCart();
}

document.getElementById("product-search").addEventListener("input", (event) => {
    const filter = event.target.value; // Obter o texto digitado
    renderProducts(filter); // Atualizar os produtos com o filtro aplicado
});


// Inicializar
renderProducts();
renderMarkets();
