const products = [
    // Bebidas Frías
    { id: 1, name: "Latte Natural (16oz)", category: "frias", price: 60, description: "Clásico café con leche frío." },
    { id: 2, name: "Latte + Jarabe", category: "frias", price: 72, description: "Elige entre jarabe de vainilla, caramelo o lavanda.", options: ["Vainilla", "Caramelo", "Lavanda"] },
    { id: 3, name: "Orange Capuccino", category: "frias", price: 72, description: "Combinación refrescante de espresso y toque cítrico." },
    { id: 4, name: "Latte Tres Leches", category: "frias", price: 82, description: "Dulce y cremoso estilo tres leches." },
    { id: 5, name: "Honey Bee (Frío)", category: "frias", price: 72, description: "Especial con notas de miel pura." },
    { id: 6, name: "Moka (Frío)", category: "frias", price: 72, description: "Espresso, leche y chocolate de la casa." },
    { id: 7, name: "Taro (Frío)", category: "frias", price: 65, description: "Bebida cremosa a base de raíz de taro." },
    { id: 8, name: "Chai (Frío)", category: "frias", price: 68, description: "Especias chai tradicionales con leche." },
    { id: 9, name: "Dirty Chai", category: "frias", price: 79, description: "Chai latte con un shot extra de espresso." },
    { id: 10, name: "Espresso Americano (Frío)", category: "frias", price: 45, description: "Clásico americano en las rocas." },

    // Bebidas Calientes
    { id: 11, name: "Capuccino (12oz)", category: "calientes", price: 55, description: "Espresso con leche texturizada y capa de espuma." },
    { id: 12, name: "Espresso", category: "calientes", price: 30, description: "Shot concentrado de café puro." },
    { id: 13, name: "Latte Natural (Caliente)", category: "calientes", price: 55, description: "Suave balance de espresso y leche caliente." },
    { id: 14, name: "Latte + Jarabe (Caliente)", category: "calientes", price: 67, description: "Elige tu jarabe preferido.", options: ["Vainilla", "Caramelo", "Lavanda"] },
    { id: 15, name: "Honey Bee (Caliente)", category: "calientes", price: 67, description: "Latte caliente con toque especial de miel." },
    { id: 16, name: "Chai (Caliente)", category: "calientes", price: 63, description: "Té chai aromático y especiado." },
    { id: 17, name: "Espresso Americano (Caliente)", category: "calientes", price: 40, description: "Café americano tradicional." },

    // Matcha
    { id: 18, name: "Matcha", category: "matcha", price: 68, description: "Té verde matcha de alta calidad." },
    { id: 19, name: "Matcha Ceremonial", category: "matcha", price: 72, description: "Grado ceremonial exclusivo." },
    { id: 20, name: "Matcha + Jarabe", category: "matcha", price: 78, description: "Elige el jarabe de tu preferencia.", options: ["Vainilla", "Lavanda"] },
    { id: 21, name: "Dirty Matcha", category: "matcha", price: 90, description: "Matcha con un shot de espresso." },
    { id: 22, name: "Strawberry Matcha", category: "matcha", price: 85, description: "Capas de matcha y puré de fresa natural." },
    { id: 23, name: "Matcha + Cold Foam", category: "matcha", price: 88, description: "Elige el sabor de tu espuma fría.", options: ["Vainilla", "Lavanda"] },
    { id: 24, name: "Matcha Coco Cold Foam", category: "matcha", price: 89, description: "Exótica combinación con cold foam de coco." },

    // Especiales
    { id: 25, name: "Avellana Cold Foam", category: "especiales", price: 89, description: "Bebida especial con espuma fría de avellana." },
    { id: 26, name: "Lotus Cold Foam", category: "especiales", price: 98, description: "Con el inconfundible sabor a galleta Lotus." },
    { id: 27, name: "Tiramisú Cold Foam", category: "especiales", price: 89, description: "Inspirado en el clásico postre italiano." },

    // Extras
    { id: 28, name: "Cold Foam", category: "extras", price: 20, description: "Porción extra de espuma fría." },
    { id: 29, name: "Jarabe Extra", category: "extras", price: 12, description: "Sabor adicional." },
    { id: 30, name: "Miel Extra", category: "extras", price: 12, description: "Porción de miel." },
    { id: 31, name: "Leche Vegetal", category: "extras", price: 15, description: "Selecciona tu tipo de leche favorita.", options: ["Leche de Avena", "Leche de Almendra", "Leche de Soya", "Leche de Coco"] },

    // Bebidas de Temporada
    { id: 32, name: "Pumpkin Spice Latte", category: "temporada", price: 72, description: "Clásico latte de calabaza + shot de espresso.", options: ["Frío", "Caliente"] },
    { id: 33, name: "Pumpkin Spice Cold Foam", category: "temporada", price: 97, description: "Latte a las rocas + espresso + cold foam de calabaza." },
    { id: 34, name: "Pumpkin Spice Matcha Latte", category: "temporada", price: 93, description: "Matcha latte a las rocas + cold foam de calabaza." },
    { id: 35, name: "Pumpkin Spice Chai Latte", category: "temporada", price: 80, description: "Latte de calabaza + chai.", options: ["Frío", "Caliente"] },
    { id: 36, name: "Ferrero Iced Latte", category: "temporada", price: 99, description: "Latte de avellana + espresso + cold foam + topping de Ferrero." },
    { id: 37, name: "Limonada de Fresa", category: "temporada", price: 89, description: "Limonada de fresa a las rocas + fresa en trozos." }
];

let cart = [];
let currentProductToConfigure = null;

document.addEventListener("DOMContentLoaded", () => {
    checkSeasonAndTheme();
    setupDailyPromo();
    filterMenu('todas');
});

// Sistema de Temporadas y Elementos Gráficos Flotantes Automáticos
function checkSeasonAndTheme() {
    const month = new Date().getMonth() + 1; // 1 - 12
    const bannerText = document.getElementById("seasonal-text");
    const body = document.getElementById("body-theme");
    const decorContainer = document.getElementById("seasonal-decorations");
    
    decorContainer.innerHTML = ""; // Limpiar decoraciones previas

    let icons = [];

    // Octubre: Halloween
    if (month === 10) {
        body.classList.add("theme-halloween");
        bannerText.innerHTML = "🎃 ¡Temporada de Halloween y Pumpkin Spice en Corner Latte House!";
        icons = ['fa-spider', 'fa-ghost', 'fa-hat-wizard', 'fa-pumpkin'];
    } 
    // Noviembre: Día de Muertos / Día de Gracias
    else if (month === 11) {
        body.classList.add("theme-halloween");
        bannerText.innerHTML = "🕯️ Celebrando Día de Muertos y Día de Gracias. ¡Prueba nuestros especiales!";
        icons = ['fa-feather', 'fa-fire', 'fa-leaf'];
    } 
    // Diciembre: Navidad
    else if (month === 12) {
        body.classList.add("theme-navidad");
        bannerText.innerHTML = "🎄 ¡Felices Fiestas! Ven a abrigarte con nuestras bebidas navideñas.";
        icons = ['fa-snowflake', 'fa-gifts', 'fa-holly-berry', 'fa-tree'];
    } 
    // Septiembre: Independencia de México
    else if (month === 9) {
        body.classList.add("theme-independencia");
        bannerText.innerHTML = "🇲🇽 ¡Viva México! Disfruta tu café patrio en Corner Latte House.";
        icons = ['fa-bell', 'fa-flag', 'fa-star'];
    } 
    // Marzo / Abril: Primavera / Pascua
    else if (month === 3 || month === 4) {
        body.classList.add("theme-primavera");
        bannerText.innerHTML = "🌷 ¡Disfruta la Primavera y la temporada de Pascua con nosotros!";
        icons = ['fa-seedling', 'fa-feather', 'fa-sun', 'fa-flower'];
    } 
    // Febrero: Día del Amor y la Amistad (Extra incluido)
    else if (month === 2) {
        body.classList.add("theme-pascua");
        bannerText.innerHTML = "💖 ¡Mes del Amor y la Amistad! Comparte un latte especial.";
        icons = ['fa-heart', 'fa-mug-hot'];
    } 
    else {
        bannerText.innerHTML = "✨ ¡Bienvenidos a Corner Latte House! Explora nuestro menú y bebidas del mes.";
        icons = ['fa-mug-hot', 'fa-coffee'];
    }

    // Generar elementos gráficos flotantes aleatorios en el fondo
    for (let i = 0; i < 12; i++) {
        const iconClass = icons[Math.floor(Math.random() * icons.length)];
        const el = document.createElement("i");
        el.className = `fa-solid ${iconClass} floating-icon`;
        el.style.top = `${Math.random() * 90}%`;
        el.style.left = `${Math.random() * 95}%`;
        el.style.animationDuration = `${4 + Math.random() * 4}s`;
        el.style.fontSize = `${1.2 + Math.random() * 1.5}rem`;
        decorContainer.appendChild(el);
    }
}

// Configuración de Promociones por Día de la Semana
function setupDailyPromo() {
    const day = new Date().getDay();
    const promoText = document.getElementById("daily-promo-text");

    if (day >= 1 && day <= 3) {
        promoText.innerHTML = "<strong>¡Días de Moka!</strong> Lunes a Miércoles lleva 2 Mokas x $100.";
    } else if (day === 4 || day === 5) {
        promoText.innerHTML = "<strong>¡Días de Taro!</strong> Jueves y Viernes disfruta de 2 Taros x $100.";
    } else {
        promoText.innerHTML = "<strong>¡Fin de semana en Corner!</strong> Ven a probar nuestras especialidades.";
    }
}

// Filtrar Menú
function filterMenu(category) {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    event && event.target.classList.add("active");

    const filtered = category === 'todas' ? products : products.filter(p => p.category === category);

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
            </div>
            <div class="product-footer">
                <span class="price">$${product.price} MXN</span>
                <button class="add-btn" onclick="handleAddToCartClick(${product.id})">Agregar</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleAddToCartClick(id) {
    const product = products.find(p => p.id === id);

    if (product.options && product.options.length > 0) {
        currentProductToConfigure = product;
        showOptionsModal(product);
    } else {
        addToCart(product, "Estándar");
    }
}

function showOptionsModal(product) {
    const modal = document.getElementById("options-modal");
    document.getElementById("modal-product-title").textContent = product.name;
    document.getElementById("modal-product-desc").textContent = "Por favor selecciona tu variante preferida:";

    const container = document.getElementById("options-container");
    container.innerHTML = `
        <label style="font-size:0.9rem; font-weight:500; color:var(--dark-brown);">Opción:</label>
        <select id="selected-product-option" class="option-select">
            ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
        </select>
    `;

    modal.style.display = "flex";
}

function closeOptionsModal() {
    document.getElementById("options-modal").style.display = "none";
    currentProductToConfigure = null;
}

function confirmAddWithOptions() {
    if (!currentProductToConfigure) return;
    const selectedOption = document.getElementById("selected-product-option").value;
    addToCart(currentProductToConfigure, selectedOption);
    closeOptionsModal();
}

function addToCart(product, variant) {
    const fullName = variant !== "Estándar" ? `${product.name} (${variant})` : product.name;
    const existing = cart.find(item => item.fullName === fullName);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, fullName, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const countSpan = document.getElementById("cart-count");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countSpan.textContent = totalItems;

    const listContainer = document.getElementById("cart-items-list");
    listContainer.innerHTML = "";

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <span>${item.quantity}x ${item.fullName}</span>
            <span>$${item.price * item.quantity} MXN</span>
        `;
        listContainer.appendChild(row);
    });

    document.getElementById("cart-total-price").textContent = totalPrice;
}

function toggleCartModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let message = "Hola, ¡Quiero hacer el siguiente pedido en *Corner Latte House*!%0A%0A";
    let total = 0;

    cart.forEach(item => {
        let subtotal = item.price * item.quantity;
        total += subtotal;
        message += `- ${item.quantity}x ${item.fullName} ($${subtotal} MXN)%0A`;
    });

    message += `%0A*Total a pagar: $${total} MXN*%0A¡Quedo a la espera de la confirmación!`;

    const phoneNumber = "312 149 1467"; // Reemplaza con tu número real
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');
}