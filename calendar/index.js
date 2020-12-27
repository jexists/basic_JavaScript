console.log('스크립트 연결 완료!')


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];


const today = new Date();
// const today = new Date(now.setMonth(now.getMonth() + 8));
const day = today.getDay();
const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();


const day_date = document.querySelector('.day_date');
const month_year = document.querySelector('.month_year');

day_date.innerHTML = `${date}, ${days[day]}`;
month_year.innerHTML = `${months[month]} | ${year}`;

console.log('오늘 날짜: ', today);
console.log('월 :', month);
console.log('일 :', date);
console.log('요일 :', day);

const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
const firstDay_day = firstDay.getDay();
console.log('1일 요일 :', firstDay_day);

const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
const lasttDay_date = lastDay.getDate();
console.log('이번달 마지막 일' , lasttDay_date);


if (firstDay_day < 7) {
  for (let i = 0; i < firstDay_day; i++) {
    const div = document.createElement('div');
    document.querySelector('.date').appendChild(div);
  }
}

for (let i = 0; i < lasttDay_date; i++) {
  const div = document.createElement('div');
  const text = document.createTextNode(i + 1);
  div.classList.add('number');
  div.appendChild(text);

  document.querySelector('.date').appendChild(div);
  
  console.log(div);
}

const activatedDate = document.querySelector(`.number:nth-of-type(${date + 7 + firstDay_day})`)
activatedDate.classList.add('active');
console.log('오늘 클릭되는 날', activatedDate);