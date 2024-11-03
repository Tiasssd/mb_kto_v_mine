const countDownDate = new Date("Nov 01, 2026 23:59:59").getTime();

// Функция для правильного склонения слов
function declension(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

// Обновляем таймер каждую секунду
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${years} ${declension(years, ['год', 'года', 'лет'])} : ${months} ${declension(months, ['месяц', 'месяца', 'месяцев'])} : ${days} ${declension(days, ['день', 'дня', 'дней'])} : ${hours} ${declension(hours, ['час', 'часа', 'часов'])} : ${minutes} ${declension(minutes, ['минута', 'минуты', 'минут'])} : ${seconds} ${declension(seconds, ['секунда', 'секунды', 'секунд'])}.`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
