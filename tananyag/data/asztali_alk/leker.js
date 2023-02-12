'use strict';

let ossze = document.getElementsByClassName('ossze');
let osszefoglalo = document.getElementsByClassName('osszefoglalo');

for (let i = 0; i < ossze.length; i++) {
    let szamol = 0;
    ossze[i].addEventListener('click', () => {
        if (szamol % 2 == 0) {
            osszefoglalo[i].style.display = 'block';
        } else {
            osszefoglalo[i].style.display = 'none';
        }

        szamol++;
    });
}
