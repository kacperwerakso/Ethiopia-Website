
window.addEventListener('scroll', scrollMapFun);
window.addEventListener('scroll', dorzeFun)
window.addEventListener('scroll', schoolFun)
window.addEventListener('scroll', sunFun)
window.addEventListener('scroll', hamerFun1)
window.addEventListener('scroll', function() {
    setTimeout(hamerFun2, 3000)
})
window.addEventListener('scroll', childsFun)
window.addEventListener('scroll', twoImage1)
window.addEventListener('scroll', twoImage2)
window.addEventListener('scroll', faunaFun1)
window.addEventListener('scroll', faunaFun2)
window.addEventListener('scroll', omoFun1)
window.addEventListener('scroll', omoFun2)
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(showFirstText, 1200);
});



function scrollMapFun() {
    const mapa = document.querySelector('.mapa');
    const imagePosition = mapa.getBoundingClientRect().top;
    const imagePositionOut = mapa.getBoundingClientRect().bottom;

    if (imagePosition < 320 && imagePositionOut > 100) {
        mapa.classList.add('slidein');
    } else {
        mapa.classList.remove('slidein');
    }
}

function showFirstText() {
    const firstText = document.querySelector('.pierwszytext1');
    firstText.classList.add('slidein');
}

function dorzeFun() {
    const tapeta = document.querySelector('.tap');
    const imagePosition = tapeta.getBoundingClientRect().top;
    const imagePositionOut = tapeta.getBoundingClientRect().bottom;

    if (imagePosition < 200 && imagePositionOut > 100) {
        tapeta.classList.remove('tapvisable');
    } else {
        tapeta.classList.add('tapvisable');
    }
};


function schoolFun() {
    const szkola = document.querySelector('.szkola');
    const imagePosition = szkola.getBoundingClientRect().top;
    const imagePositionOut = szkola.getBoundingClientRect().bottom;
    if (imagePosition < 400 && imagePositionOut > 100) {
        szkola.classList.remove('szkolavisable');
    } else {
        szkola.classList.add('szkolavisable');
    }
}

function sunFun() {
    const tapeta2 = document.querySelector('.tapeta2');
    const imagePosition = tapeta2.getBoundingClientRect().top;
    const imagePositionOut = tapeta2.getBoundingClientRect().bottom;

    if (imagePosition < 200 && imagePositionOut > 100) {
        tapeta2.classList.remove('tap2visable');
    } else {
        tapeta2.classList.add('tap2visable');
    }
};

function hamerFun1() {
    const hamer1 = document.querySelector('.srodek6-1-1-1');
    const imagePosition = hamer1.getBoundingClientRect().top;
    const imagePositionOut = hamer1.getBoundingClientRect().bottom;


    if (imagePosition < 300 && imagePositionOut > 100) {
        hamer1.classList.remove('srodek6-1-1-1visable');
    } else {
        hamer1.classList.add('srodek6-1-1-1visable');
    } 
}

function hamerFun2() {
    const hamer2 = document.querySelector('.srodek6-1-1-1-1');
    const imagePosition2 =  hamer2.getBoundingClientRect().top;
    const imagePositionOut2 = hamer2.getBoundingClientRect().bottom;

    if (imagePosition2 < 300 && imagePositionOut2 > 100) {
        hamer2.classList.remove('srodek6-1-1-1-1visable');
    } else {
        hamer2.classList.add('srodek6-1-1-1-1visable');
    } 
}


function hamerFun2() {
    const hamer2 = document.querySelector('.srodek6-1-1-1-1');
    const imagePosition2 =  hamer2.getBoundingClientRect().top;
    const imagePositionOut2 = hamer2.getBoundingClientRect().bottom;

    if (imagePosition2 < 300 && imagePositionOut2 > 100) {
        hamer2.classList.remove('srodek6-1-1-1-1visable');
    } else {
        hamer2.classList.add('srodek6-1-1-1-1visable');
    } 
}


function childsFun() {
    const dzieci = document.querySelector('.dzieci');
    const imagePosition =  dzieci.getBoundingClientRect().top;
    const imagePositionOut = dzieci.getBoundingClientRect().bottom;

    if (imagePosition < 394 && imagePositionOut > 100) {
        dzieci.classList.remove('dziecivisable');
    } else {
        dzieci.classList.add('dziecivisable');
    } 
}




function twoImage1() {
    const srodek51 = document.querySelector('.srodek5-1');
    const imagePosition2 =  srodek51.getBoundingClientRect().top;
    const imagePositionOut2 = srodek51.getBoundingClientRect().bottom;

    if (imagePosition2 < 200 && imagePositionOut2 > 100) {
        srodek51.classList.remove('srodek5-1opacity');
    } else {
        srodek51.classList.add('srodek5-1opacity');
    } 
}

function twoImage2() {
    const srodek53 = document.querySelector('.srodek5-3');
    const imagePosition2 =  srodek53.getBoundingClientRect().top;
    const imagePositionOut2 = srodek53.getBoundingClientRect().bottom;

    if (imagePosition2 < 200 && imagePositionOut2 > 100) {
        srodek53.classList.remove('srodek5-3opacity');
    } else {
        srodek53.classList.add('srodek5-3opacity');
    } 
}

function faunaFun1() {
    const srodek8 = document.querySelector('.srodek8-8');
    const imagePosition2 =  srodek8.getBoundingClientRect().top;
    const imagePositionOut2 = srodek8.getBoundingClientRect().bottom;

    if (imagePosition2 < 300 && imagePositionOut2 > 200) {
        srodek8.classList.remove('srodek8-8opacity');
    } else {
        srodek8.classList.add('srodek8-8opacity');
    } 
}

function faunaFun2() {
    const srodek81 = document.querySelector('.srodek8-9');
    const imagePosition2 =  srodek81.getBoundingClientRect().top;
    const imagePositionOut2 = srodek81.getBoundingClientRect().bottom;

    if (imagePosition2 < 300 && imagePositionOut2 > 200) {
        srodek81.classList.remove('srodek8-9opacity');
    } else {
        srodek81.classList.add('srodek8-9opacity');
    } 
}


function omoFun1() {
    const srodek810 = document.querySelector('.srodek8-10');
    const imagePosition2 =  srodek810.getBoundingClientRect().top;
    const imagePositionOut2 = srodek810.getBoundingClientRect().bottom;

    if (imagePosition2 < 300 && imagePositionOut2 > 200) {
        srodek810.classList.remove('srodek8-10opacity');
    } else {
        srodek810.classList.add('srodek8-10opacity');
    } 
}

function omoFun2() {
    const srodek811 = document.querySelector('.srodek8-11');
    const imagePosition2 =  srodek811.getBoundingClientRect().top;
    const imagePositionOut2 = srodek811.getBoundingClientRect().bottom;

    if (imagePosition2 < 300 && imagePositionOut2 > 200) {
        srodek811.classList.remove('srodek8-11opacity');
    } else {
        srodek811.classList.add('srodek8-11opacity');
    } 
}



function getEthiopianTime() {
    const ethiopianTimezoneOffset = 180;
  
    const currentDate = new Date();
    const utcTimestamp = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
    const ethiopianTimestamp = utcTimestamp + (ethiopianTimezoneOffset * 60000);
  
    const ethiopianDate = new Date(ethiopianTimestamp);
  
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const formattedTime = ethiopianDate.toLocaleTimeString('en-ET', options);
  
    return formattedTime;
}


function updateEthiopianDateTime() {
    const ethiopianDateTimeElement = document.querySelector('.ethiopianDateTime');
    ethiopianDateTimeElement.textContent = getEthiopianTime();
}

updateEthiopianDateTime();

setInterval(updateEthiopianDateTime, 1000);


const darkModeToggle = document.querySelector('.darkmode');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

  
});

