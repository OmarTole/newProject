'use strict'

const inputTNG = document.querySelector('.tng'),
      inputUSD = document.querySelector('.usd');

inputTNG.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send();

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response);
        if (request.status === 200) {
            inputUSD.value = (inputTNG.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'Что-то пошло не так!'
        }
    })
})