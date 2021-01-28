'use strict';


import testWebP from './components/webpService/webpService';


document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('a');
    links.forEach((x) => {
        x.addEventListener('click', (e) => {
            e.preventDefault();
        })
    })
    testWebP();


});



