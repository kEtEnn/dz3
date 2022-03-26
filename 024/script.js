let phrases = [
  { text: 'смотреть тик токи', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'купить билеты в Америку ', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'читать реп', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'посмотреть новости', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'расставить книги на полке по алфавиту', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'слетать в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'послушать грустных песен', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть первый сезон сериала', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'написать бабушке', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 