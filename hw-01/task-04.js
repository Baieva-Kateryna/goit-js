'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let balance;
let message;
const droid = prompt('Какое количество дроидов вы желаете преобрести?');
if (droid === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = droid * pricePerDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    balance = credits - totalPrice;
    message = `Вы купили ${droid} дроидов, на счету осталось ${balance} кредитов`;
  }
}
alert(message);
