// Оголошуємо масив, у який будемо додавати пари елементів
let carSales = [];

// Створюємо функцію, в яку додаватимемо два елементи
function addItem() {
    const car = document.getElementById('car').value.trim();
    const sales = document.getElementById('sales').value.trim();

    // Здійснюємо перевірку, чи введенo у поля значення
    if (car === "" || sales === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Здійснюємо перевірку на синтаксис (має бути латиниця з пробілами)
    const carRegex = /^[A-Za-z\s]+$/;
    if (!carRegex.test(car)) {
        alert("The car brand must contain only Latin letters and spaces");
        return;
    }
    // Здійснюємо перевірку, чи sales є цілим числом
    if (!Number.isInteger(Number(sales))) {
        alert("The sales value must be an integer");
        return;
    }

    // Додаємо новий об'єкт у масив. Значення, введене через input є стрінговим, тому
    // перетворюємо sales в натуральне число за допомогою parseInt, адже далі є сортування за числовим значенням
    carSales.push({ car: car, sales: parseInt(sales)});

    // Оновлюємо список та очищаємо поля для введення нових даних
    displayList();
    document.getElementById('car').value = "";
    document.getElementById('sales').value = "";
}

// Створюємо функцію, яка відображає список
function displayList() {
    const list = document.getElementById('carSalesList');

    list.innerHTML = ""; // Очищаємо попередні вміст для запобігання дублюванню значень у списку

    carSales.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.car} = ${item.sales}`;
        list.appendChild(li);
    });
}

// Створюємо функцію, яка сортуємо список за назвою
function sortByName() {
    carSales.sort((a, b) => a.car.localeCompare(b.car)); // Сортуємо за алфавітом
    displayList();
}

// Створюємо функцію, яка сортує список за значенням у порядку зростання
function sortBySales() {
    carSales.sort((a, b) => a.sales - b.sales);
    displayList();
}

// Створюємо функцію для очищення списку та оновлення відображення
function clearList() {
    carSales = [];
    displayList();
}