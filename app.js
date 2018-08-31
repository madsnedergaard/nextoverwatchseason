// The magical timestamp
var date = moment.unix(1535763600);

var actionText = document.querySelector('.action');
if (moment().isAfter(date)) {
    actionText.innerText = 'started';
}

// The calculated time left
var elem = document.querySelector('.start-text');
var timeLeft = moment().to(date);
elem.innerText = timeLeft;

// Locale timezone dates
var pstTime = document.querySelector('.us-pst-time');
pstTime.innerText = moment(date).utc().utcOffset(-7).format('MMMM Do hA');

var utcTime = document.querySelector('.utc-time');
utcTime.innerText = moment(date).utc().format('MMMM D HH:mm');

var localTime = document.querySelector('.local-time');
localTime.innerText = moment(date).local().format('MMMM D HH:mm');
