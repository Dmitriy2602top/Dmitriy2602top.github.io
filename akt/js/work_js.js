let typer = 0;
let dizayn = 0;
let adaptyve = 0;

let price = [];
function appendPrice(massiv, price1, price2, price3){
massiv.splice(0, 3) 
massiv.push(price1)
massiv.push(price2)
massiv.push(price3)
};
function summa(a, b, c){
  return a+b+c
}

let calculator={
  type: typer,
  dizayn: dizayn,
  adaptyve: adaptyve,
  total: 0
};
appendPrice(price, 5000, 20000, 100000);
calculator.type = price[prompt("Выберите тип сайта, укажите только цифру: 1 - Сайт-визитка 2- корпоративный 3- Интернет-магазин") - 1];
appendPrice(price, 1000, 3000, 7000);
calculator.dizayn = price[prompt("Выберите тип дизайна, укажите только цифру: 1 - Шаблонный дизайн 2 - Уникальный дизайн 3 - WOW-дизайн") - 1];
appendPrice(price, 1000, 1500, 2000);
calculator.adaptyve = price[prompt("Выберите тип адаптивность, укажите только цифру: 1 - Только ПК 2 - Только мобильный сайт 3 - ПК + мобильный") - 1];
calculator.total = summa(calculator.type, calculator.dizayn, calculator.adaptyve)
console.log(calculator)
alert("Стоимость сайта " + (calculator.total) + "рублей")