const messageEl = document.querySelector('.message');
const duaEl = document.querySelector('.dua');
let count = 0;

if(messageEl.innerHTML >= 0 && messageEl.innerHTML < 3) {
    console.log('Subhanallah');
    duaEl.innerHTML = 'Subhanallah'
} else if (messageEl.innerHTML >= 3 && messageEl.innerHTML < 6 ) {
    console.log('Walhamdulillah');
     duaEl.innerHTML = 'Walhamdulillah'
} else {
    console.log('Wallahu Akbar');
     duaEl.innerHTML = 'Allahu Akbar'
}
