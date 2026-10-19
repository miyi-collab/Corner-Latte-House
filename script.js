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
let currentMenuCategory = "todas";
let storeIsOpen = false;
let currentStoreDay = null;

const promotions = [
    { id: "moka-pair", name: "2 Mokas fríos", description: "Lleva 2 Mokas fríos por $100 MXN.", productId: 6, days: [1, 2, 3], price: 100 },
    { id: "taro-pair", name: "2 Taros fríos", description: "Lleva 2 Taros fríos por $100 MXN.", productId: 7, days: [4, 5], price: 100 }
];

document.addEventListener("DOMContentLoaded", () => {
    checkSeasonAndTheme();
    setupDailyPromo();
    updateStoreStatus();
    filterMenu('todas');
    window.setInterval(updateStoreStatus, 60000);
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

    const corners = document.getElementById("seasonal-corners");
    corners.innerHTML = "";
    ["top-left", "top-right", "bottom-left", "bottom-right"].forEach((position, index) => {
        const ornament = document.createElement("i");
        ornament.className = `fa-solid ${icons[index % icons.length]} corner-ornament ${position}`;
        corners.appendChild(ornament);
    });
}

// Configuración de Promociones por Día de la Semana
function setupDailyPromo() {
    const day = getStoreDateTime().day;
    currentStoreDay = day;
    const promoText = document.getElementById("daily-promo-text");
    const activePromotions = promotions.filter(promo => promo.days.includes(day));
    promoText.textContent = activePromotions.length
        ? "Elige una promoción disponible hoy. Las ofertas solo se pueden agregar en los días indicados."
        : "Hoy no hay promociones activas, pero puedes disfrutar de todo nuestro menú.";

    const list = document.getElementById("promotions-list");
    list.innerHTML = "";
    promotions.forEach(promo => {
        const availableToday = promo.days.includes(day);
        const card = document.createElement("div");
        card.className = `promotion-option${availableToday ? " promotion-available" : ""}`;

        const details = document.createElement("div");
        details.className = "promotion-details";
        const title = document.createElement("strong");
        title.textContent = promo.name;
        const description = document.createElement("span");
        description.textContent = promo.description;
        const days = document.createElement("small");
        days.textContent = promo.id === "moka-pair" ? "Lunes a miércoles" : "Jueves y viernes";
        details.append(title, description, days);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "promotion-button";
        button.textContent = availableToday ? "Agregar promoción" : "No disponible hoy";
        button.disabled = !availableToday || !storeIsOpen;
        button.setAttribute("aria-label", `${button.textContent}: ${promo.name}`);
        button.addEventListener("click", () => addPromotionToCart(promo));

        card.append(details, button);
        list.appendChild(card);
    });
}

// Filtrar Menú
function filterMenu(category, selectedTab) {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";
    currentMenuCategory = category;

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    const activeTab = selectedTab || document.querySelector(`.tab-btn[data-category="${category}"]`);
    if (activeTab) activeTab.classList.add("active");

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
                <button class="add-btn" onclick="handleAddToCartClick(${product.id})" ${storeIsOpen ? "" : "disabled"}>
                    ${storeIsOpen ? "Agregar" : "Cerrado"}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleAddToCartClick(id) {
    if (!storeIsOpen) {
        openStoreClosedModal();
        return;
    }
    const product = products.find(p => p.id === id);
    if (!product) return;
    currentProductToConfigure = product;
    showOptionsModal(product);
}

function showOptionsModal(product) {
    const modal = document.getElementById("options-modal");
    document.getElementById("modal-product-title").textContent = product.name;
    document.getElementById("modal-product-desc").textContent = product.options?.length
        ? "Selecciona una opción y la cantidad para confirmar tu producto."
        : "Elige la cantidad y confirma para agregar este producto a tu pedido.";

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    if (product.options?.length) {
        const optionLabel = document.createElement("label");
        optionLabel.htmlFor = "selected-product-option";
        optionLabel.textContent = "Opción:";
        container.appendChild(optionLabel);

        const optionSelect = document.createElement("select");
        optionSelect.id = "selected-product-option";
        optionSelect.className = "option-select";
        product.options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            optionSelect.appendChild(optionElement);
        });
        container.appendChild(optionSelect);
    }

    const quantityLabel = document.createElement("label");
    quantityLabel.htmlFor = "selected-product-quantity";
    quantityLabel.className = "quantity-label";
    quantityLabel.textContent = "Cantidad:";

    const quantityControls = document.createElement("div");
    quantityControls.className = "quantity-picker";
    const decreaseButton = document.createElement("button");
    decreaseButton.type = "button";
    decreaseButton.className = "quantity-button";
    decreaseButton.textContent = "−";
    decreaseButton.setAttribute("aria-label", "Disminuir cantidad");
    const quantityInput = document.createElement("input");
    quantityInput.id = "selected-product-quantity";
    quantityInput.className = "quantity-input";
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.max = "99";
    quantityInput.value = "1";
    quantityInput.inputMode = "numeric";
    quantityInput.setAttribute("aria-label", "Cantidad");
    const increaseButton = document.createElement("button");
    increaseButton.type = "button";
    increaseButton.className = "quantity-button";
    increaseButton.textContent = "+";
    increaseButton.setAttribute("aria-label", "Aumentar cantidad");
    decreaseButton.addEventListener("click", () => {
        quantityInput.value = String(parseQuantity(quantityInput.value) - 1);
    });
    increaseButton.addEventListener("click", () => {
        quantityInput.value = String(Math.min(99, parseQuantity(quantityInput.value) + 1));
    });
    quantityControls.append(decreaseButton, quantityInput, increaseButton);
    container.append(quantityLabel, quantityControls);

    modal.style.display = "flex";
}

function closeOptionsModal() {
    document.getElementById("options-modal").style.display = "none";
    currentProductToConfigure = null;
}

function confirmAddToCart() {
    if (!currentProductToConfigure) return;
    if (!storeIsOpen) {
        closeOptionsModal();
        openStoreClosedModal();
        return;
    }
    const optionSelect = document.getElementById("selected-product-option");
    const variant = optionSelect ? optionSelect.value : "Estándar";
    const quantity = parseQuantity(document.getElementById("selected-product-quantity").value);
    addToCart(currentProductToConfigure, variant, quantity);
    closeOptionsModal();
    showCartConfirmation(`${quantity} ${quantity === 1 ? "producto agregado" : "productos agregados"} al carrito.`);
}

function addToCart(product, variant, quantity = 1) {
    if (!storeIsOpen) {
        openStoreClosedModal();
        return;
    }
    const fullName = variant !== "Estándar" ? `${product.name} (${variant})` : product.name;
    const existing = cart.find(item => item.fullName === fullName);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, fullName, quantity });
    }
    updateCartUI();
}

function parseQuantity(value) {
    const quantity = Number.parseInt(value, 10);
    return Number.isFinite(quantity) ? Math.min(99, Math.max(1, quantity)) : 1;
}

function showCartConfirmation(message) {
    const confirmation = document.getElementById("cart-confirmation");
    confirmation.textContent = message;
    confirmation.classList.add("visible");
    window.clearTimeout(showCartConfirmation.timeoutId);
    showCartConfirmation.timeoutId = window.setTimeout(() => {
        confirmation.classList.remove("visible");
    }, 2500);
}

function toggleCartModal() {
    const modal = document.getElementById("cart-modal");
    const isOpening = modal.style.display !== "flex";

    modal.style.display = isOpening ? "flex" : "none";
    if (isOpening) updateCartUI();
}

function addPromotionToCart(promo) {
    if (!promo.days.includes(getStoreDateTime().day)) return;
    if (!storeIsOpen) {
        openStoreClosedModal();
        return;
    }
    const product = products.find(item => item.id === promo.productId);
    if (!product) return;
    addToCart({ ...product, id: promo.id, name: promo.name, price: promo.price, description: promo.description }, "Estándar");
    showCartConfirmation(`${promo.name} agregada al carrito.`);
}

function updateCartUI() {
    const countSpan = document.getElementById("cart-count");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countSpan.textContent = totalItems;

    const listContainer = document.getElementById("cart-items-list");
    listContainer.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;
        const row = document.createElement("div");
        row.className = "cart-item-row";
        const name = document.createElement("span");
        name.className = "cart-item-name";
        name.textContent = item.fullName;

        const quantityControls = document.createElement("div");
        quantityControls.className = "cart-quantity-controls";
        const decreaseButton = document.createElement("button");
        decreaseButton.type = "button";
        decreaseButton.className = "quantity-button";
        decreaseButton.textContent = "−";
        decreaseButton.setAttribute("aria-label", `Disminuir cantidad de ${item.fullName}`);
        decreaseButton.addEventListener("click", () => changeCartQuantity(index, -1));

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;
        quantity.setAttribute("aria-label", "Cantidad");

        const increaseButton = document.createElement("button");
        increaseButton.type = "button";
        increaseButton.className = "quantity-button";
        increaseButton.textContent = "+";
        increaseButton.setAttribute("aria-label", `Aumentar cantidad de ${item.fullName}`);
        increaseButton.addEventListener("click", () => changeCartQuantity(index, 1));

        quantityControls.append(decreaseButton, quantity, increaseButton);

        const price = document.createElement("span");
        price.className = "cart-item-price";
        price.textContent = `$${itemSubtotal} MXN`;

        row.append(name, quantityControls, price);
        listContainer.appendChild(row);
    });

    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const paymentChoices = document.querySelectorAll(".payment-choice");
    paymentChoices.forEach(choice => {
        const method = choice.querySelector('input[name="paymentMethod"]');
        const visible = choice.dataset.delivery === "both" || choice.dataset.delivery === deliveryType;
        choice.hidden = !visible;
        method.disabled = !visible;
    });
    const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');
    if (selectedPayment.disabled) {
        const defaultMethod = deliveryType === "recoger" ? "caja" : "efectivo";
        document.querySelector(`input[name="paymentMethod"][value="${defaultMethod}"]`).checked = true;
    }
    const addressBox = document.getElementById("store-address");
    const totalContainer = document.getElementById("cart-total-container");

    if (deliveryType === "recoger") {
        addressBox.style.display = "block";
        totalContainer.innerHTML = `<strong>Total a pagar: $${subtotal} MXN</strong>`;
    } else {
        addressBox.style.display = "none";
        totalContainer.innerHTML = `
            <strong>Subtotal: $${subtotal} MXN</strong>
            <p style="font-size: 0.75rem; color: #d97706; margin-top: 0.2rem;">* El costo de envío varía según la zona y se cotizará por WhatsApp.</p>
        `;
    }
}

function changeCartQuantity(index, change) {
    const item = cart[index];
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) cart.splice(index, 1);
    updateCartUI();
}

function sendToWhatsApp() {
    if (!storeIsOpen) {
        openStoreClosedModal();
        return;
    }
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    let message = "Hola, ¡Quiero hacer el siguiente pedido en *Corner Latte House*!\n\n";
    let subtotal = 0;

    cart.forEach(item => {
        let itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;
        message += `- ${item.quantity}x ${item.fullName} ($${itemSubtotal} MXN)\n`;
    });

    message += `\n*Subtotal de productos: $${subtotal} MXN*\n`;

    if (deliveryType === "recoger") {
        message += `📍 *Método:* Recoger en cafetería\n*Total estimado: $${subtotal} MXN*\n`;
    } else {
        message += `🛵 *Método:* Envío a domicilio (Pendiente cotizar zona)\n`;
    }

    if (paymentMethod === "transferencia") {
        message += `💳 *Método de pago:* Transferencia (Solicito los datos para realizarla).\n`;
    } else if (paymentMethod === "caja") {
        message += `💵 *Método de pago:* Pagaré en caja al recoger.\n`;
    } else {
        message += `💵 *Método de pago:* Efectivo.\n`;
    }

    message += `\n¡Quedo a la espera de la confirmación y total final!`;

    const phoneNumber = "5213121491467"; // Recuerda poner tu número real aquí
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}

function getStoreDateTime() {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Mexico_City",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    const weekdays = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
        day: weekdays[values.weekday],
        minutes: Number(values.hour) * 60 + Number(values.minute)
    };
}

function getOpeningIntervals(day) {
    return day === 0 ? [[9 * 60, 14 * 60], [17 * 60, 21 * 60]] : [[8 * 60, 14 * 60], [16 * 60 + 30, 21 * 60]];
}

function formatOpeningTime(minutes) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const period = hour >= 12 ? "pm" : "am";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${String(minute).padStart(2, "0")} ${period}`;
}

function getNextOpening(day, minutes) {
    for (let offset = 0; offset <= 7; offset++) {
        const candidateDay = (day + offset) % 7;
        const opening = getOpeningIntervals(candidateDay).find(([start]) => offset > 0 || start > minutes);
        if (opening) return { day: candidateDay, offset, minutes: opening[0] };
    }
    return null;
}

function updateStoreStatus() {
    const { day, minutes } = getStoreDateTime();
    const isOpen = getOpeningIntervals(day).some(([start, end]) => minutes >= start && minutes < end);
    const wasOpen = storeIsOpen;
    storeIsOpen = isOpen;

    const status = document.getElementById("store-status");
    status.textContent = isOpen ? "Ahora estamos abiertos y aceptando pedidos." : "Ahora estamos cerrados.";
    status.classList.toggle("is-open", isOpen);
    status.classList.toggle("is-closed", !isOpen);

    if (wasOpen !== isOpen) filterMenu(currentMenuCategory);
    if (currentStoreDay !== day || wasOpen !== isOpen) setupDailyPromo();

    const closedModal = document.getElementById("closed-modal");
    if (isOpen) {
        closedModal.style.display = "none";
    } else {
        updateClosedMessage(day, minutes);
        if (wasOpen || closedModal.dataset.dismissed !== "true") openStoreClosedModal();
    }
}

function updateClosedMessage(day, minutes) {
    const nextOpening = getNextOpening(day, minutes);
    if (!nextOpening) return;
    const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const dayLabel = nextOpening.offset === 0
        ? "hoy"
        : nextOpening.offset === 1
            ? "mañana"
            : `el ${dayNames[nextOpening.day]}`;
    const message = document.getElementById("closed-message");
    message.textContent = `Regresamos ${dayLabel} a las ${formatOpeningTime(nextOpening.minutes)}.`;
}

function openStoreClosedModal() {
    const modal = document.getElementById("closed-modal");
    modal.dataset.dismissed = "false";
    modal.style.display = "flex";
}

function closeStoreClosedModal() {
    const modal = document.getElementById("closed-modal");
    modal.dataset.dismissed = "true";
    modal.style.display = "none";
}

function viewStoreHours() {
    closeStoreClosedModal();
    document.getElementById("hours-section").scrollIntoView({ behavior: "smooth", block: "center" });
}